import { defer } from "react-router-dom";
import store from "@/store";
import {
  invoicesAtom,
  invoicesQPAtom,
  initialInvoicesQPState,
  checkInvoicesAtom,
} from "@/store/invoices";
import fetchInvoices from "@/queries/invoices";

import type { QueryClient } from "@tanstack/react-query";

const loader = (queryClient: QueryClient) => async () => {
  store.set(invoicesQPAtom, initialInvoicesQPState);
  const data = await fetchInvoices(queryClient);
  store.set(invoicesAtom, data);
  const checkInvoices = data.data
    .map((invoice) => invoice.id)
    .reduce((acc, current) => ({ ...acc, [current]: false }), { all: false });
  store.set(checkInvoicesAtom, checkInvoices);
  return defer({ invoiceList: data });
};

export default loader;
