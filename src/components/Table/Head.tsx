/** @jsxImportSource @emotion/react */
import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { flexRender } from "@tanstack/react-table";
import CheckboxCell from "./CheckboxCell";
import { SORT_DIRECTION } from "@/types/enums";
import { tableHeadStyle } from "./styles";

import type { HeaderGroup } from "@tanstack/react-table";
import { CheckItems, HandleChangeEvent } from "@/types/utils";

interface HeadProps<Directions, DataType, SortType> {
  getHeaderGroups: () => HeaderGroup<DataType & { id: string }>[];
  directions: Directions;
  active?: boolean;
  handleSortChange: ({ sort }: { sort: SortType }) => void;
  onSelectAllClick: HandleChangeEvent;
  checkItems: CheckItems;
}

function Head<Directions, DataType, SortType>({
  getHeaderGroups,
  handleSortChange,
  active = true,
  directions,
  onSelectAllClick,
  checkItems,
}: HeadProps<Directions, DataType, SortType>) {
  return (
    <TableHead css={tableHeadStyle}>
      {getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          <CheckboxCell
            name="all"
            onSelectAllClick={onSelectAllClick}
            checkItems={checkItems}
          />
          {headerGroup.headers.map((header) => (
            <TableCell key={header.id}>
              {header.id !== "menu" ? (
                <TableSortLabel
                  active={active}
                  direction={
                    directions[header.id as keyof Directions] as SORT_DIRECTION
                  }
                  onClick={() => {
                    handleSortChange({ sort: header.id as SortType });
                  }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableSortLabel>
              ) : null}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableHead>
  );
}

export default Head;
