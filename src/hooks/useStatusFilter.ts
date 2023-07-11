import { useAtom } from "jotai";
import { INVOICE_STATUS } from "@/types/enums";
import { useFetchInvoices } from "@/hooks/useFetchInvoices";
import { invoicesQPAtom } from "@/store/invoices";

import type { SelectChangeEvent } from "@mui/material";

export function useStatusFilter(setStatus: React.Dispatch<React.SetStateAction<string>>) {
  const [invoicesQR, setInvoicesQR] = useAtom(invoicesQPAtom)
  const fetchInvoices = useFetchInvoices()

  return (event: SelectChangeEvent<string>) => {
    const value = event.target.value as INVOICE_STATUS 
    setStatus(value);
    setInvoicesQR({...invoicesQR, filterStatus: value, skip: "0"})
    void fetchInvoices()
  };
}