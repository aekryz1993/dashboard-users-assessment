/** @jsxImportSource @emotion/react */
import { Stack } from "@mui/material";
import { emptyDataLayout } from "./styles";

function EmptyData() {
  return (
    <Stack css={emptyDataLayout}>
      <h1>EMPTY DATA</h1>
    </Stack>
  );
}

export default EmptyData;