import { LIMIT } from "@/utils/variables";
import { TableBody, TableCell, TableRow, Skeleton } from "@mui/material";
import { flexRender } from "@tanstack/react-table";
import CheckboxCell from "./CheckboxCell";

import type { RowModel, Column } from "@tanstack/react-table";

interface BodyProps<DataType> {
  getRowModel: () => RowModel<DataType>;
  getAllColumns: () => Column<DataType, unknown>[];
  isFetching: boolean;
  skeletonHeight?: number;
  skeletonCount?: number;
}

function Body<DataType>({
  getRowModel,
  isFetching,
  getAllColumns,
  skeletonHeight = 28,
  skeletonCount = LIMIT,
}: BodyProps<DataType>) {
  const skeletons = Array.from({ length: skeletonCount }, (_, i) => i);
  const columnCount = getAllColumns().length;

  return (
    <>
      {!isFetching ? (
        <TableBody>
          {getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              <CheckboxCell />
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      ) : (
        <>
          {skeletons.map((skeleton) => (
            <TableRow key={skeleton}>
              {Array.from({ length: columnCount + 1 }, (_, i) => i).map((elm) => (
                <TableCell key={elm}>
                  <Skeleton height={skeletonHeight} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </>
      )}
    </>
  );
}

export default Body;
