import { InvoiceType } from "@/types/data";
import dayjs from "dayjs";
import type { AccessorFnColumnDef, CellContext } from "@tanstack/react-table";
import { INVOICES_SORT_COLUMN } from "@/types/enums";
import {
  DateCol,
  EmailCol,
  IdCol,
  NameCol,
  StatusCol,
  MenuCol,
} from "@/components/InvoiceListColumns";

const cell = (row: CellContext<InvoiceType, React.ReactElement<any, any>>) =>
  row.getValue();

export const columns: AccessorFnColumnDef<
  InvoiceType,
  React.ReactElement<any, any>
>[] = [
  {
    id: INVOICES_SORT_COLUMN.ID,
    accessorFn: (row) => <IdCol id={row.id} />,
    header: "Invoice Id",
    cell,
  },
  {
    id: INVOICES_SORT_COLUMN.NAME,
    accessorFn: (row) => (
      <NameCol
        avatarUrl={row.user.avatarUrl}
        firstName={row.user.firstName}
        lastName={row.user.lastName}
      />
    ),
    header: "Name",
    cell,
  },
  {
    id: INVOICES_SORT_COLUMN.EMAIL,
    accessorFn: (row) => <EmailCol email={row.user.email} />,
    header: "Email",
    cell,
  },
  {
    id: INVOICES_SORT_COLUMN.DATE,
    accessorFn: (row) => (
      <DateCol date={dayjs(row.date).format("DD MMM, YYYY")} />
    ),
    header: "Date",
    cell,
  },
  {
    id: INVOICES_SORT_COLUMN.STATUS,
    accessorFn: (row) => <StatusCol status={row.status} />,
    header: "Status",
    cell,
  },
  {
    id: "menu",
    accessorFn: () => <MenuCol />,
    cell,
  },
];
