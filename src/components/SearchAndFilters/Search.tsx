/** @jsxImportSource @emotion/react */
import { Input } from '@mui/material';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import { searchStyle } from './styles';

function Search() {
  return ( 
    <div css={searchStyle}>
      <Input endAdornment={<SearchOutlined />} placeholder='Search' />
    </div>
   );
}

export default Search;