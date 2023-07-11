import { atom } from "jotai";

import type { InvoiceType, InvoicesQueryParams, InvoicesResponseData } from "@/types/data";
import { INVOICES_SORT_COLUMN, SORT_DIRECTION } from "@/types/enums";
import { TableDataParams } from "@/types/utils";

export const initialInvoicesQPState = {
  skip: "0",
  limit: "10",
};

export const initialInvoicesState: InvoicesResponseData = {
  data: [],
  totalItems: 0,
  totalPages: 0,
  currentPage: 1,
};

export const initialSortDirection = Object.keys(INVOICES_SORT_COLUMN).reduce(
  (sortDirections, currentColumn) => ({
    ...sortDirections,
    [currentColumn as INVOICES_SORT_COLUMN]: SORT_DIRECTION.desc,
  }),
  {},
) as {
  [sortColumn in INVOICES_SORT_COLUMN]: SORT_DIRECTION
};

export const sortDirectionAtom = atom(initialSortDirection);

export const invoicesAtom = atom(initialInvoicesState) as unknown as ReturnType<
  typeof atom<TableDataParams<InvoiceType>>
>;

export const invoicesQPAtom = atom<InvoicesQueryParams>(initialInvoicesQPState);
