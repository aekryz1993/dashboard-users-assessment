import { createStore } from "jotai";
import type { ColumnDef } from '@tanstack/react-table'

export type Store = ReturnType<typeof createStore>;

export interface TableProps {
  data: unknown[];
  columns: ColumnDef<unknown>[];
}