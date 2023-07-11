import { useAtom } from "jotai";
import { useFetchInvoices } from "@/hooks/useFetchInvoices";
import { invoicesQPAtom } from "@/store/invoices";
import useDebounce from "@/hooks/useDebounce";

export function useSearch() {
  const [invoicesQR, setInvoicesQR] = useAtom(invoicesQPAtom);
  const fetchInvoices = useFetchInvoices();
  const debounce = useDebounce();

  return (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    debounce(() => {
      setInvoicesQR({ ...invoicesQR, search: event.target.value, skip: "0" });
      void fetchInvoices();
    });
  };
}
