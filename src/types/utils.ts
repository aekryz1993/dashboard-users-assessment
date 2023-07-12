import { createStore } from "jotai";

import type { SelectChangeEvent } from "@mui/material";

export type Store = ReturnType<typeof createStore>;

export interface TableDataParams<DataType> {
  data: DataType[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
}

export type HandlePageChange = (
  event: React.ChangeEvent<unknown> | SelectChangeEvent<number>,
  currentPage: number | string,
) => void;

export interface RouteName {
  analytics: string;
  dashboard: string;
  schedule: string;
  calendar: string;
  messages: string;
  notification: string;
  settings: string;
}
