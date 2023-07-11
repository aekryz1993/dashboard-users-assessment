/** @jsxImportSource @emotion/react */
import { Input } from "@mui/material";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { searchStyle } from "./styles";
import { useAtom } from "jotai";
import { useFetchInvoices } from "@/hooks/useFetchInvoices";
import { invoicesQPAtom } from "@/store/invoices";
import useDebounce from "@/hooks/useDebounce";

function Search() {
  const [invoicesQR, setInvoicesQR] = useAtom(invoicesQPAtom);
  const fetchInvoices = useFetchInvoices();
  const debounce = useDebounce();

  const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    debounce(() => {
      setInvoicesQR({ ...invoicesQR, search: event.target.value, skip: "0" });
      void fetchInvoices();
    });
  };

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
