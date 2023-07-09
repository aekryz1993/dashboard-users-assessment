import { Stack } from "@mui/material";
import Search from "./Search";
import Filters from "./Filters";

function SearchAndFilters() {
  return ( 
    <Stack direction="row" justifyContent='space-between' alignItems="center" paddingX={2}>
      <Search />
      <Filters />
    </Stack>
   );
}

export default SearchAndFilters;