import { createStore } from "jotai";

export type Store = ReturnType<typeof createStore>;

export interface TableDataParams<DataType> {
  data: DataType[]
  totalItems: number;
  totalPages: number;
  currentPage: number;
}

export type HandlePageChange = (
  event: React.ChangeEvent<unknown>,
  currentPage: number,
) => void;