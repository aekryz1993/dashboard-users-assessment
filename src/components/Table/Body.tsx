/** @jsxImportSource @emotion/react */
import { LIMIT } from "@/utils/variables";
import { TableBody, TableCell, TableRow, Skeleton } from "@mui/material";
import { flexRender } from "@tanstack/react-table";
import CheckboxCell from "./CheckboxCell";
import { tableBodyStyle } from "./styles";

import type { RowModel, Column } from "@tanstack/react-table";
import { Children } from "react";
import { CheckItems, HandleChangeEvent } from "@/types/utils";

interface BodyProps<DataType> {
  getRowModel: () => RowModel<DataType & { id: string }>;
  getAllColumns: () => Column<DataType & { id: string }, unknown>[];
  isFetching: boolean;
  skeletonHeight?: number;
  skeletonCount?: number;
  onSelectAllClick: HandleChangeEvent;
  checkItems: CheckItems;
}

function Body<DataType>({
  getRowModel,
  isFetching,
  getAllColumns,
  skeletonHeight = 42,
  skeletonCount = LIMIT,
  onSelectAllClick,
  checkItems,
}: BodyProps<DataType>) {
  const skeletons = Array.from({ length: skeletonCount }, (_, i) => i);
  const columnCount = getAllColumns().length;

  return (
    <>
      {!isFetching ? (
        <TableBody css={tableBodyStyle}>
          {getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              <CheckboxCell
                name={row.original.id}
                onSelectAllClick={onSelectAllClick}
                checkItems={checkItems}
              />
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
              {Children.map(Array.from({ length: columnCount + 1 }), () => (
                <TableCell>
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
