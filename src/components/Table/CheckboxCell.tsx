import { TableCell, Checkbox } from "@mui/material";

function CheckboxCell() {
  return ( 
    <TableCell padding="checkbox">
      <Checkbox
        color="primary"
        // indeterminate={numSelected > 0 && numSelected < rowCount}
        // checked={rowCount > 0 && numSelected === rowCount}
        // onChange={onSelectAllClick}
        inputProps={{
          'aria-label': 'select all desserts',
        }}
      />
    </TableCell> );
}

export default CheckboxCell;