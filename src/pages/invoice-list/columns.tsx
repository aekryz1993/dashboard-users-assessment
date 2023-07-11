import { InvoiceType } from "@/types/data";
import { Chip } from "@mui/material";
import dayjs from "dayjs";
import type { AccessorFnColumnDef, CellContext } from "@tanstack/react-table";
import { INVOICES_SORT_COLUMN } from "@/types/enums";

export const columns: AccessorFnColumnDef<InvoiceType, string>[] = [
  {
    id: INVOICES_SORT_COLUMN.ID,
    accessorFn: (row) => row.id,
    header: "Invoice Id",
  },
  {
    id: INVOICES_SORT_COLUMN.NAME,
    accessorFn: (row) => `${row.user.firstName} ${row.user.lastName}`,
    header: "Name",
    cell: (row: CellContext<InvoiceType, string>) => {
      return (
        <Chip
          label={row.getValue()}
          size="small"
          color={row.getValue() === "active" ? "primary" : "default"}
        />
      );
    },
  },
  {
    id: INVOICES_SORT_COLUMN.EMAIL,
    accessorFn: (row) => row.user.email,
    header: "Email",
  },
  {
    id: INVOICES_SORT_COLUMN.DATE,
    accessorFn: (row) => dayjs(row.date).format("DD MMM, YYYY"),
    header: "Date",
  },
  {
    id: INVOICES_SORT_COLUMN.STATUS,
    accessorFn: (row) => row.status,
    header: "Status",
    cell: (row: CellContext<InvoiceType, string>) => {
      return (
        <Chip
          label={row.getValue()}
          size="small"
          color={row.getValue() === "active" ? "primary" : "default"}
        />
      );
    },
  },
];