import { invoicesQPAtom } from "@/store/invoices";
import { useAtom } from "jotai";
import { useFetchInvoices } from "@/hooks/useFetchInvoices";

export function usePagination() {
  const [invoicesQP, setInvoicesQP] = useAtom(invoicesQPAtom);
  const fetchInvoices = useFetchInvoices();

  return (_event: React.ChangeEvent<unknown>, currentPage: number) => {
    setInvoicesQP({ ...invoicesQP, skip: (currentPage - 1).toString() });
    void fetchInvoices();
  };
}
