import { invoicesAtom, sortDirectionAtom } from "@/store/invoices";
import { useIsFetchingInvoices } from "@/hooks/useIsFetchingInvoices";
import { useAtom } from "jotai";
import { Table } from "@/components";
import { columns } from "./columns";
import { INVOICES_SORT_COLUMN } from "@/types/enums";
import { InvoiceType } from "@/types/data";
import { useSorter } from "@/hooks/useSorter";
import { usePagination } from "@/hooks/usePagination";

function InvoicesTable() {
  const [invoicesDataParams] = useAtom(invoicesAtom);
  const isFetchingInvoices = useIsFetchingInvoices();
  const [sortDirections] = useAtom(sortDirectionAtom);
  const handleSortChange = useSorter();
  const handlePageChange = usePagination();

  return (
    <Table<typeof sortDirections, INVOICES_SORT_COLUMN, InvoiceType>
      dataParams={invoicesDataParams}
      columns={columns}
      directions={sortDirections}
      isFetching={isFetchingInvoices}
      handlePageChange={handlePageChange}
      handleSortChange={handleSortChange}
    />
  );
}

export default InvoicesTable;
