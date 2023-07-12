import { useAtom } from "jotai";
import { checkInvoicesAtom } from "@/store/invoices";

export function useCheckboxSelect() {
  const [checkInvoices, setCheckInvoices] = useAtom(checkInvoicesAtom);

  return (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "all") {
      const allInvoices = Object.keys(checkInvoices).reduce(
        (acc, current) => ({ ...acc, [current]: event.target.checked }),
        { all: event.target.checked },
      );
      setCheckInvoices(allInvoices);
      return;
    }

    setCheckInvoices({
      ...checkInvoices,
      [event.target.name]: event.target.checked,
      all: event.target.checked ? checkInvoices.all : false,
    });
  };
}
