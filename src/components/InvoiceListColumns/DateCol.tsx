/** @jsxImportSource @emotion/react */
import { memo } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Box } from "@mui/material";
import { boxStyle } from "./style";

import type { InvoiceType } from "@/types/data";

const DateCol = memo(({ date }: Pick<InvoiceType, "date">) => {
  return (
    <Box css={boxStyle} color="#03A89E">
      <CalendarMonthIcon />
      <span>{date.toString()}</span>
    </Box>
  );
});

export default DateCol;
