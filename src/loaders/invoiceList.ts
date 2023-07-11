import store from "@/store";
import { invoicesAtom, invoicesQPAtom, initialInvoicesQPState } from "@/store/invoices";
import fetchInvoices from "@/queries/invoices";

import type { QueryClient } from "@tanstack/react-query";

const loader = (queryClient: QueryClient) => async () => {
  store.set(invoicesQPAtom, initialInvoicesQPState);
  const data = await fetchInvoices(queryClient)
  store.set(invoicesAtom, data);
  return data;
};

export default loader;
