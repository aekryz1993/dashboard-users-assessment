/** @jsxImportSource @emotion/react */
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { filterInput } from "./styles";
import { useDateFilter } from "@/hooks/useDateFilter";

function DateFilter() {
  const handleChange = useDateFilter();

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
