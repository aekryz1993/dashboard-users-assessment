import api from "@/services"
import { QueryClient } from "@tanstack/react-query"

const invoicesQuery = () => ({
  queryKey: ['invoices'],
  queryFn: () => api.getInvoices(),
})

const loader = 
  (queryClient: QueryClient) =>
  async () => {
    const query = invoicesQuery()
    const dataFromCache = queryClient.getQueryData(query.queryKey)
    if (dataFromCache) return dataFromCache
    const response = await queryClient.fetchQuery(query)
    return response.json()
  }

export default loader;