import { TableCell, Checkbox } from "@mui/material";
import { CheckItems, HandleChangeEvent } from "@/types/utils";

function CheckboxCell({
  name,
  onSelectAllClick,
  checkItems,
}: {
  name: string;
  onSelectAllClick: HandleChangeEvent;
  checkItems: CheckItems;
}) {
  return (
    <TableCell padding="checkbox">
      <Checkbox
        name={name}
        color="primary"
        checked={checkItems[name]}
        onChange={onSelectAllClick}
        inputProps={{
          "aria-label": "select all desserts",
        }}
      />
    </TableCell>
  );
}

export default CheckboxCell;
