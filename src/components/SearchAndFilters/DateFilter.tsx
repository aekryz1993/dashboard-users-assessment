/** @jsxImportSource @emotion/react */
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { filterInput } from "./styles";
import type { Dayjs } from "dayjs";
import { useAtom } from "jotai";
import { invoicesQPAtom } from "@/store/invoices";
import { useFetchInvoices } from "@/hooks/useFetchInvoices";

function DateFilter() {
  const [invoicesQR, setInvoicesQR] = useAtom(invoicesQPAtom);
  const fetchInvoices = useFetchInvoices();

  const handleChange = (dates: (Dayjs | null)[]) => {

    if (dates.every((date) => !!date)) {
      setInvoicesQR({
        ...invoicesQR,
        filterDateStart: JSON.stringify(dates[0]),
        filterDateEnd: JSON.stringify(dates[1]),
        skip: "0",
      });
      void fetchInvoices();
    }
  };
  return (
    <DateRangePicker
      css={filterInput}
      onChange={handleChange}
      localeText={{
        start: "",
        end: "",
      }}
    />
  );
}

export default DateFilter;
