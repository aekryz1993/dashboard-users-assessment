import api from "@/services";
import store from "@/store";
import { fetchInvoicesErrorAtom, invoicesQPAtom } from "@/store/invoices";
import { QueryClient } from "@tanstack/react-query";

import type { InvoicesResponseData } from "@/types/data";
import { getErrorMessage } from "@/utils/errors";

const invoicesQuery = () => ({
  queryKey: ["invoices", store.get(invoicesQPAtom)],
  queryFn: () => api.getInvoices(),
});

async function fetchInvoices(
  queryClient: QueryClient,
): Promise<InvoicesResponseData | undefined> {
  const query = invoicesQuery();
  
  store.set(fetchInvoicesErrorAtom, { error: null })

  try {
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  } catch (error) {
    store.set(fetchInvoicesErrorAtom, { error: getErrorMessage(error) })
  }
}

export default fetchInvoices;
