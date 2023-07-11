import api from "@/services";
import store from "@/store";
import { invoicesQPAtom } from "@/store/invoices";
import { QueryClient } from "@tanstack/react-query";

import type { InvoicesResponseData } from "@/types/data";

const invoicesQuery = () => ({
  queryKey: ["invoices", store.get(invoicesQPAtom)],
  queryFn: () => api.getInvoices(),
});

async function fetchInvoices(
  queryClient: QueryClient,
): Promise<InvoicesResponseData> {
  const query = invoicesQuery();

  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
}

export default fetchInvoices;
