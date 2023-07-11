import {
  invoicesAtom,
  invoicesQPAtom,
  sortDirectionAtom,
} from "@/store/invoices";
import { useIsFetchingInvoices } from "@/hooks/useIsFetchingInvoices";
import { useAtom } from "jotai";
import { Table } from "@/components";
import { columns } from "./columns";
import { useFetchInvoices } from "@/hooks/useFetchInvoices";
import { INVOICES_SORT_COLUMN, SORT_DIRECTION } from "@/types/enums";
import { InvoiceType } from "@/types/data";

function InvoicesTable() {
  const [invoicesDataParams] = useAtom(invoicesAtom);
  const [invoicesQP, setInvoicesQP] = useAtom(invoicesQPAtom);
  const isFetchingInvoices = useIsFetchingInvoices();
  const fetchInvoices = useFetchInvoices();
  const [sortDirections, setSortDirections] = useAtom(sortDirectionAtom);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    currentPage: number,
  ) => {
    setInvoicesQP({ ...invoicesQP, skip: (currentPage - 1).toString() });
    void fetchInvoices();
  };

  const handleSortChange = ({ sort }: { sort: INVOICES_SORT_COLUMN }) => {
    setInvoicesQP({
      ...invoicesQP,
      sort,
      direction: sortDirections[sort],
      skip: "0",
    });
    setSortDirections((prevState) => ({
      ...prevState,
      [sort]:
        sortDirections[sort] === SORT_DIRECTION.asc
          ? SORT_DIRECTION.desc
          : SORT_DIRECTION.asc,
    }));
    void fetchInvoices();
  };

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
