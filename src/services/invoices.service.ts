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
      if(response.status === 200) return response.json();
      throw new Error('Unknown error')
    } catch (error) {
      reportError({ message: getErrorMessage(error) });
    }
  };

  return {
    getInvoices,
  };
};

export default invoiceService;
