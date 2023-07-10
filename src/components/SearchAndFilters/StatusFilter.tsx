/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useAtom } from "jotai";
import { INVOICE_STATUS } from "@/types/enums";
import { upperCaseFirstLetter } from "@/utils/helpers";
import { MenuItem, Select } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { useFetchInvoices } from "@/hooks/useFetchInvoices";
import { invoicesQPAtom } from "@/store/invoices";
import { filterInput } from "./styles";

import type { SelectChangeEvent } from "@mui/material";

function StatusFilter() {
  const [invoicesQR, setInvoicesQR] = useAtom(invoicesQPAtom)
  const [status, setStatus] = useState(invoicesQR.filter ?? "");
  const fetchInvoices = useFetchInvoices()

  const handleStatusChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value as INVOICE_STATUS 
    setStatus(value);
    setInvoicesQR({...invoicesQR, filter: value})
    void fetchInvoices()
  };

  return (
    <FormControl css={filterInput}>
      <Select value={status} onChange={handleStatusChange}>
        {Object.keys(INVOICE_STATUS).map((statusKey) => (
          <MenuItem value={statusKey} key={statusKey}>
            {upperCaseFirstLetter(statusKey.toLowerCase())}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default StatusFilter;
