import { InvoiceType } from "@/types/data";
import {
  INVOICES_SORT_COLUMN,
  INVOICE_STATUS,
  SORT_DIRECTION,
} from "@/types/enums";

export const compareTwoValues = (
  a: string | number | Date,
  b: string | number | Date,
  direction: SORT_DIRECTION,
) => {
  if (a < b) return direction === SORT_DIRECTION.desc ? -1 : 1;
  else if (a > b) return direction === SORT_DIRECTION.desc ? 1 : -1;
  return 0;
};

export const handleInvoicesSortData =
  (data: InvoiceType[]) =>
  ({
    direction,
    sort,
  }: {
    direction: SORT_DIRECTION;
    sort: INVOICES_SORT_COLUMN;
  }) => {
    const userProp =
      (sort === INVOICES_SORT_COLUMN.NAME ||
        sort === INVOICES_SORT_COLUMN.EMAIL) &&
      (sort === INVOICES_SORT_COLUMN.NAME ? "firstName" : sort.toLowerCase());

    const invoiceProp =
      (sort === INVOICES_SORT_COLUMN.DATE ||
        sort === INVOICES_SORT_COLUMN.ID) &&
      (sort === INVOICES_SORT_COLUMN.ID
        ? INVOICES_SORT_COLUMN.ID.toLowerCase()
        : sort.toLowerCase());

    switch (sort) {
      case INVOICES_SORT_COLUMN.DATE:
      case INVOICES_SORT_COLUMN.ID:
        return data.sort((a, b) => {
          const prop = invoiceProp as "id" | "date";
          return compareTwoValues(a[prop], b[prop], direction);
        });
      case INVOICES_SORT_COLUMN.STATUS: {
        const pendingData = data.filter(
          (item) => item.status === INVOICE_STATUS.PENDING,
        );
        const completedData = data.filter(
          (item) => item.status === INVOICE_STATUS.COMPLETE,
        );
        const cancelData = data.filter(
          (item) => item.status === INVOICE_STATUS.CANCEL,
        );
        return direction === SORT_DIRECTION.desc
          ? [...pendingData, ...completedData, ...cancelData]
          : [...cancelData, ...completedData, ...pendingData];
      }
      case INVOICES_SORT_COLUMN.EMAIL:
      case INVOICES_SORT_COLUMN.NAME:
        return data.sort((a, b) => {
          const prop = userProp as "firstName" | "email";
          return compareTwoValues(a.user[prop], b.user[prop], direction);
        });
      default: {
        return [];
      }
    }
  };
