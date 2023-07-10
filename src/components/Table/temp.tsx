import { invoicesAtom } from "@/store/invoices";
import { useIsFetching } from "@tanstack/react-query";
import { useAtom } from "jotai";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Table() {
  const [invoices] = useAtom(invoicesAtom);
  const isFetchingInvoices = useIsFetching({ queryKey: ['invoices'] })
  
  if (isFetchingInvoices)
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );

  return (
    <div>
      {invoices.length > 0 &&
        invoices.map((invoice) => (
          <li key={invoice.id}>
            <div>{invoice.user.email}</div>
            <div>{invoice.status}</div>
          </li>
        ))}
    </div>
  );
}

export default Table;
