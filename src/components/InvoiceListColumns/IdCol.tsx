/** @jsxImportSource @emotion/react */
import { memo } from "react";
import { Box } from "@mui/material";
import { boxStyle } from "./style";

import type { InvoiceType } from "@/types/data";

const IdCol = memo(({ id }: Pick<InvoiceType, "id">) => {
  return (
    <Box css={boxStyle}>
      <span>{id}</span>
    </Box>
  );
});

export default IdCol;
