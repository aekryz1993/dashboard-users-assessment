import api from "@/services";
import store from "@/store";
import { invoicesQPAtom } from "@/store/invoices";
import { QueryClient } from "@tanstack/react-query";

import type { InvoiceType } from "@/types/data";

const invoicesQuery = () => ({
  queryKey: ["invoices", store.get(invoicesQPAtom)],
  queryFn: () => api.getInvoices(),
});

async function fetchInvoices(queryClient: QueryClient) {
  const query = invoicesQuery();

  const data: InvoiceType[] =
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query));

  return data;
}

export default fetchInvoices;
