import { atom } from "jotai";

import type { InvoiceType, InvoicesQueryParams } from "@/types/data";

export const invoicesQPState = {
  limit: "0",
  take: "10",
}

export const invoicesAtom = atom([]) as unknown as ReturnType<
  typeof atom<InvoiceType[]>
>;

export const invoicesQPAtom = atom<InvoicesQueryParams>(invoicesQPState);
