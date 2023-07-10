import { invoicesAtom } from "@/store/invoices";
import { useIsFetching } from "@tanstack/react-query";
import { useAtom } from "jotai";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Table } from "@/components";
import { columns } from "./columns";
import dayjs from "dayjs";

function InvoicesTable() {
  const [invoices] = useAtom(invoicesAtom);
  // const isFetchingInvoices = useIsFetching({ queryKey: ['invoices'] })
  
  // if (isFetchingInvoices)
  //   return (
  //     <Box sx={{ display: "flex" }}>
  //       <CircularProgress />
  //     </Box>
  //   );

  const data = invoices.map((invoice) => ({
    ...invoice,
    date: dayjs(invoice.date).format('DD MMM, YYYY'),
    user: {
      ...invoice.user,
      fullName: `${invoice.user.firstName} ${invoice.user.lastName}`,
    },
  }))

  return <Table data={data} columns={columns} />
}

export default InvoicesTable;
