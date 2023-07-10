import { Chip } from "@mui/material";
import type { ColumnDef, CellContext } from "@tanstack/react-table";

export const columns: ColumnDef<unknown, unknown>[] = [
  {
    accessorKey: "id",
    header: "Invoice Id",
  },
  {
    accessorKey: "user.fullName",
    header: "Name",
    cell: (row: CellContext<unknown, unknown>) => {
      console.log(row.getValue())
      return (
        <Chip
          label={row.getValue() as string}
          size="small"
          color={row.getValue() === "active" ? "primary" : "default"}
        />
      );
    },
  },
  {
    accessorKey: "user.email",
    header: "Email",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (row: CellContext<unknown, unknown>) => {
      return (
        <Chip
          label={row.getValue() as string}
          size="small"
          color={row.getValue() === "active" ? "primary" : "default"}
        />
      );
    },
  },
];