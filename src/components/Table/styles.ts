import { css } from "@emotion/react";

export const paperStyle = css`
  background-color: var(--light-version-background, #f1f4fa);
`;

export const tableStyle = css`
  border-collapse: separate !important;
  border-spacing: 0 0.5rem;
  td:first-of-type,
  th:first-of-type {
    border-radius: 0.625rem 0 0 0.625rem;
  }
  td:last-of-type,
  th:last-of-type {
    border-radius: 0 0.625rem 0.625rem 0;
  }
`;

export const tableHeadStyle = css`
  background-color: var(--light-version-background, #f1f4fa);
  & tr {
    & th {
      border: none;
    }
  }
  & span {
    color: var(--light-version-text) !important;
    font-size: 0.79rem;
  }
`;

export const tableBodyStyle = css`
  & tr {
    background: var(--light-version-neutral, #fff);
    & td {
      border: none;
    }
  }
`;

export const paginationContainerStyle = css`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const paginationItemContainerStyle = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  & .text {
    font-size: 0.88875rem;
    color: var(--light-version-text, #06152b);
  }
  & .MuiInputBase-root {
    width: 3.9375rem;
    border-radius: 0.625rem;
    background: var(--basic-white, #fff);
    min-width: 5rem;
    & .MuiOutlinedInput-notchedOutline {
      border: none;
    }
    & fieldset {
      display: none;
    }
  }
  & .pagination-buttons {
    & .MuiPaginationItem-root {
      display: flex;
      width: 2rem;
      height: 2rem;
      padding: 0.625rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.625rem;
      border-radius: 2rem;
      border: 1px solid #f1f1f1;
      background: #fff;
    }
    & .Mui-selected {
      border-radius: 2rem;
      background: #3a36db;
    }
  }
`;

export const doubleArrowBoxStyle = css`
  display: flex !important;
  width: 2rem;
  height: 2rem;
  /* padding: 0.625rem; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 2rem;
  border: 1px solid #f1f1f1;
  background: #fff;
  cursor: pointer;
`;

export const emptyDataLayout = css`
  width: 100%;
  height: 16rem;
  justify-content: center;
  align-items: center;
  & h1 {
    font-size: 2rem;
    opacity: 0.5;
    font-weight: 700;
  }
`;
