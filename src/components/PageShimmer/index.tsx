/** @jsxImportSource @emotion/react */
import { Children } from "react";
import { Stack, Skeleton } from "@mui/material";
import { LIMIT } from "@/utils/variables";
import { shimmerLayoutStyle } from "./styles";

function PageShimmer() {
  return (
    <Stack gap={4} css={shimmerLayoutStyle}>
      {Children.map(Array.from(Array(LIMIT).values()), () => (
        <Skeleton variant="rectangular" width='90%' height={92} />
      ))}
    </Stack>
  );
}

export default PageShimmer;
