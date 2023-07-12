import { createStore } from "jotai";

import type { SelectChangeEvent } from "@mui/material";

export type Store = ReturnType<typeof createStore>;

export interface TableDataParams<DataType> {
  data: DataType[]
  totalItems: number;
  totalPages: number;
  currentPage: number;
}

export type HandlePageChange = (
  event: React.ChangeEvent<unknown> | SelectChangeEvent<number>,
  currentPage: number | string,
) => void;