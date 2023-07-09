/** @jsxImportSource @emotion/react */
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { filterInput } from "./styles";

function DateFilter() {
  return (
    <DateRangePicker
      css={filterInput}
      localeText={{
        start: "",
        end: "",
      }}
    />
  );
}

export default DateFilter;
