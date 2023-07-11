import store from "@/store";
import { invoicesQPAtom } from "@/store/invoices";
import { getErrorMessage, reportError } from "@/utils/errors";

const invoiceService = (baseUrl: string) => {
  const getInvoices = async () => {
    try {
      const queryParams = store.get(invoicesQPAtom);

      const response = await fetch(
        `${baseUrl}/invoices?${new URLSearchParams(queryParams).toString()}`,
      );
      return response.json();
    } catch (error) {
      reportError({ message: getErrorMessage(error) });
    }
  };

  return {
    getInvoices,
  };
};

export default invoiceService;
