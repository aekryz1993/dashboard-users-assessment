import { InvoiceType, InvoicesQueryParams } from "@/types/data";
import type { Invoice, MirageServer, User } from "../types";
import { handleInvoicesSortData } from "../helpers";
import { initialInvoicesState } from "@/store/invoices";
import dayjs from "dayjs";

export function getInvoice(server: MirageServer) {
  server.get("/api/invoices", (schema, request) => {
    const queryParams: InvoicesQueryParams = request.queryParams;
    const limit = queryParams.limit ? parseInt(queryParams.limit) : 10;
    const skip = queryParams.skip ? parseInt(queryParams.skip) : 0;
    const {
      filterStatus,
      sort,
      search,
      direction,
      filterDateStart,
      filterDateEnd,
    } = queryParams;

    const parsedFilteredDates =
      filterDateStart && filterDateEnd
        ? {
            filterDateStart: dayjs(JSON.parse(filterDateStart) as Date),
            filterDateEnd: dayjs(JSON.parse(filterDateEnd) as Date),
          }
        : null;

    const filteredDataByDate = parsedFilteredDates
      ? schema.db.invoices.filter(
          (invoice: Invoice) =>
            dayjs(invoice.date) >= parsedFilteredDates.filterDateStart &&
            dayjs(invoice.date) <= parsedFilteredDates.filterDateEnd,
        )
      : schema.db.invoices;

    const filteredDataByStatus = (
      filterStatus
        ? filteredDataByDate.filter(
            (invoice: Invoice) => invoice.status === filterStatus,
          )
        : filteredDataByDate
    ).map((invoice: Invoice) => {
      const { userId, ...restProps } = invoice;
      const user = schema.db.users.find(userId) as User;
      return { ...restProps, user };
    }) as InvoiceType[];

    const searchedData = search
      ? filteredDataByStatus.filter((invoice) => {
          const user = invoice.user;
          const targets = [user.firstName, user.lastName, user.email];
          return targets.some((target) =>
            new RegExp(search.toLowerCase()).test(target.toLowerCase()),
          );
        })
      : filteredDataByStatus;

    const totalItems = searchedData.length;

    if (totalItems === 0) return initialInvoicesState;

    const sortData =
      sort && direction
        ? handleInvoicesSortData(searchedData)({
            direction,
            sort,
          })
        : searchedData;

    const data = sortData?.slice(skip * limit, limit * (skip + 1)) ?? [];
    return {
      data,
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: skip + 1,
    };
  });
}
