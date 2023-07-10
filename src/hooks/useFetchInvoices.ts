import fetchInvoices from "@/queries/invoices"
import { useAtom } from "jotai";
import { invoicesAtom } from "@/store/invoices";
import { useQueryClient } from "@tanstack/react-query";

export const useFetchInvoices = () => {
  const queryClient = useQueryClient()

  const [,setInvoices] = useAtom(invoicesAtom)

  return () => fetchInvoices(queryClient).then(data => setInvoices(data))
}