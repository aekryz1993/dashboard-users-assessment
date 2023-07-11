import { useIsFetching } from "@tanstack/react-query";

export const useIsFetchingInvoices = () =>
  useIsFetching({ queryKey: ["invoices"] }) > 0;
