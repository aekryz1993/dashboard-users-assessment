import {
  invoicesQPAtom,
  sortDirectionAtom,
} from "@/store/invoices";
import { useAtom } from "jotai";
import { useFetchInvoices } from "@/hooks/useFetchInvoices";
import { INVOICES_SORT_COLUMN, SORT_DIRECTION } from "@/types/enums";

export function useSorter() {
  const [invoicesQP, setInvoicesQP] = useAtom(invoicesQPAtom);
  const fetchInvoices = useFetchInvoices();
  const [sortDirections, setSortDirections] = useAtom(sortDirectionAtom);

  return ({ sort }: { sort: INVOICES_SORT_COLUMN }) => {
    setInvoicesQP({
      ...invoicesQP,
      sort,
      direction: sortDirections[sort],
      skip: "0",
    });
    setSortDirections((prevState) => ({
      ...prevState,
      [sort]:
        sortDirections[sort] === SORT_DIRECTION.asc
          ? SORT_DIRECTION.desc
          : SORT_DIRECTION.asc,
    }));
    void fetchInvoices();
  };
}