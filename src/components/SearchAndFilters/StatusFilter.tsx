/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { INVOICE_STATUS } from "@/types/enums";
import { upperCaseFirstLetter } from "@/utils/helpers";
import { MenuItem, Select } from "@mui/material";
import FormControl from "@mui/material/FormControl";

import type { SelectChangeEvent } from "@mui/material";
import { filterInput } from "./styles";

function StatusFilter() {
  const [status, setStatus] = useState("");

  const handleStatusChange = (event: SelectChangeEvent<string>) => {
    setStatus(event.target.value);
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
