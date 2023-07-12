import { useAtom } from "jotai";
import { checkInvoicesAtom } from "@/store/invoices";
import { TableCell, Checkbox } from "@mui/material";
import { useCheckboxSelect } from "@/hooks/useCheckboxSelect";

function CheckboxCell({ name }: { name: string }) {
  const [checkInvoices] = useAtom(checkInvoicesAtom);
  const onSelectAllClick = useCheckboxSelect()

  return (
    <TableCell padding="checkbox">
      <Checkbox
        name={name}
        color="primary"
        checked={checkInvoices[name]}
        onChange={onSelectAllClick}
        inputProps={{
          "aria-label": "select all desserts",
        }}
      />
    </TableCell>
  );
}

export default CheckboxCell;
