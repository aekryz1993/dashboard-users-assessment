/** @jsxImportSource @emotion/react */
import { Input } from "@mui/material";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { useSearch } from "@/hooks/useSearch";
import { searchStyle } from "./styles";

function Search() {
  const handleSearch = useSearch()

  return (
    <div css={searchStyle}>
      <Input
        endAdornment={<SearchOutlined />}
        placeholder="Search"
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
