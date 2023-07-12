import { css } from "@emotion/react";

export const errorBoundaryLayout = css`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  & small {
    color: red;
  }
`;
