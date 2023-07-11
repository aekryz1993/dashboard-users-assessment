import { Pagination } from "@mui/material";
import type { HandlePageChange } from "@/types/utils";

interface TablePaginationProps {
  pageCount: number;
  paginationPage: number;
  handlePageChange: HandlePageChange
}

function TablePagination({
  pageCount,
  paginationPage,
  handlePageChange,
}: TablePaginationProps) {
  return (
    <Pagination
      count={pageCount}
      page={paginationPage}
      onChange={handlePageChange}
      color="primary"
    />
  );
}

export default TablePagination;
