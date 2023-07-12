/** @jsxImportSource @emotion/react */
import { Box, Button, Pagination } from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import {
  doubleArrowBoxStyle,
  paginationContainerStyle,
  paginationItemContainerStyle,
} from "./styles";

import type { HandlePageChange } from "@/types/utils";
import { Children } from "react";

interface TablePaginationProps {
  pageCount: number;
  paginationPage: number;
  handlePageChange: HandlePageChange;
}

function TablePagination({
  pageCount,
  paginationPage,
  handlePageChange,
}: TablePaginationProps) {
  return (
    <div css={paginationContainerStyle}>
      <div css={paginationItemContainerStyle}>
        <span className="text">Rows</span>
        <Select
          size="small"
          value={paginationPage}
          onChange={(event) => handlePageChange(event, event.target.value)}
        >
          {Children.map(
            Array.from(Array(pageCount).values()),
            (_child, index) => (
              <MenuItem value={index + 1}>{index + 1}</MenuItem>
            ),
          )}
        </Select>
      </div>

      <div css={paginationItemContainerStyle}>
        <Button
          css={doubleArrowBoxStyle}
          disabled={paginationPage === 1}
          onClick={(event) => handlePageChange(event, 1)}
        >
          <KeyboardDoubleArrowLeftIcon className="doubleArrow" />
        </Button>
        <Pagination
          className="pagination-buttons"
          count={pageCount}
          page={paginationPage}
          onChange={handlePageChange}
          color="primary"
        />
        <Button
          css={doubleArrowBoxStyle}
          disabled={paginationPage === pageCount}
          onClick={(event) => handlePageChange(event, pageCount)}
        >
          <KeyboardDoubleArrowRightIcon />
        </Button>
      </div>
    </div>
  );
}

export default TablePagination;
