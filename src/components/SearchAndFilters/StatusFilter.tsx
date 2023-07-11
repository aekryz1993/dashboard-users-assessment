/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useAtom } from "jotai";
import { INVOICE_STATUS } from "@/types/enums";
import { upperCaseFirstLetter } from "@/utils/helpers";
import { MenuItem, Select } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { invoicesQPAtom } from "@/store/invoices";
import { useStatusFilter } from "@/hooks/useStatusFilter";
import { filterInput } from "./styles";

function StatusFilter() {
  const [invoicesQR] = useAtom(invoicesQPAtom)
  const [status, setStatus] = useState(invoicesQR.filterStatus ?? "");
  const handleStatusChange = useStatusFilter(setStatus)

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
