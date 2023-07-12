/** @jsxImportSource @emotion/react */
import { Paper, Table as MuiTable } from "@mui/material";
import {
  AccessorFnColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Head from "./Head";
import Body from "./Body";
import TablePagination from "./TablePagination";
import {
  CheckItems,
  HandleChangeEvent,
  HandlePageChange,
  TableDataParams,
} from "@/types/utils";
import { paperStyle, tableStyle } from "./styles";
import EmptyData from "./EmptyData";

export interface TableProps<Directions, SortType, DataType> {
  dataParams: TableDataParams<DataType & { id: string }>;
  columns: AccessorFnColumnDef<DataType & { id: string }, any>[];
  isFetching: boolean;
  skeletonHeight?: number;
  skeletonCount?: number;
  handlePageChange: HandlePageChange;
  handleSortChange: ({ sort }: { sort: SortType }) => void;
  directions: Directions;
  active?: boolean;
  onSelectAllClick: HandleChangeEvent;
  checkItems: CheckItems;
}

function Table<Directions, SortType, DataType>({
  dataParams,
  columns,
  isFetching,
  skeletonCount,
  skeletonHeight,
  handlePageChange,
  handleSortChange,
  directions,
  active,
  onSelectAllClick,
  checkItems,
}: TableProps<Directions, SortType, DataType>) {
  const { getHeaderGroups, getRowModel, getAllColumns } = useReactTable({
    data: dataParams?.data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    pageCount: dataParams?.totalPages ?? 0,
  });

  return (
    <Paper elevation={0} css={paperStyle}>
      {getRowModel().rows.length > 0 ? (
        <>
          <MuiTable css={tableStyle}>
            <Head<Directions, DataType, SortType>
              getHeaderGroups={getHeaderGroups}
              handleSortChange={handleSortChange}
              directions={directions}
              active={active}
              onSelectAllClick={onSelectAllClick}
              checkItems={checkItems}
            />
            <Body<DataType>
              getRowModel={getRowModel}
              getAllColumns={getAllColumns}
              isFetching={isFetching}
              skeletonHeight={skeletonHeight}
              skeletonCount={skeletonCount}
              onSelectAllClick={onSelectAllClick}
              checkItems={checkItems}
            />
          </MuiTable>
          {dataParams?.totalPages > 0 && dataParams?.currentPage > 0 && (
            <TablePagination
              pageCount={dataParams.totalPages}
              paginationPage={dataParams.currentPage}
              handlePageChange={handlePageChange}
            />
          )}
        </>
      ) : (
        <EmptyData />
      )}
    </Paper>
  );
}

export default Table;
