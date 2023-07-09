import { css } from "@emotion/react";

export const searchStyle = css`
  max-width: 25.25rem;
  .MuiInputBase-root {
    border-radius: 0.625rem;
    width: 100%;
    height: 100%;
    background: var(--light-version-neutral, #fff);
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .MuiInputBase-root::before {
    content: none;
  }
  .MuiInputBase-root::after {
    content: none;
  }
  .MuiSvgIcon-root {
    width: 1.2rem;
    height: 1.2rem;
    opacity: 0.4;
  }
`;

export const filterInput = css`
  .MuiInputBase-input {
    padding: 0.625rem 0.96169rem 0.625rem 0.6875rem;
  }
`