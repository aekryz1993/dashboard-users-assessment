import type { Dayjs } from "dayjs";
import { useAtom } from "jotai";
import { invoicesQPAtom } from "@/store/invoices";
import { useFetchInvoices } from "@/hooks/useFetchInvoices";
import dayjs from "dayjs";

export function useDateFilter() {
  const [invoicesQR, setInvoicesQR] = useAtom(invoicesQPAtom);
  const fetchInvoices = useFetchInvoices();

  return (dates: (Dayjs | null)[]) => {
    if (dates.every((date) => !!date && dayjs(date, 'DD/MM/YYYY').isValid())) {
      setInvoicesQR({
        ...invoicesQR,
        filterDateStart: JSON.stringify(dates[0]),
        filterDateEnd: JSON.stringify(dates[1]),
        skip: "0",
      });
      void fetchInvoices();
    }
  };
}
