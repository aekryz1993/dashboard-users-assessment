import { Stack } from "@mui/material";
import StatusFilter from "./StatusFilter";
import DateFilter from "./DateFilter";

function Filters() {
  return ( 
    <Stack direction="row" alignItems="center" gap={4} >
      <StatusFilter />
      <DateFilter />
    </Stack>
   );
}

export default Filters;