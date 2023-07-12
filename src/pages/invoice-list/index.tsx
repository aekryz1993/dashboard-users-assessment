/** @jsxImportSource @emotion/react */
import { useAtom } from "jotai";
import { SearchAndFilters } from "@/components";
import { PageLayout } from "@/layouts";
import InvoicesTable from "./InvoicesTable";
import { fetchInvoicesErrorAtom } from "@/store/invoices";
import { Alert } from "@mui/material";

function InvoicePage() {
  const [fetchingInvoicesError] = useAtom(fetchInvoicesErrorAtom);
  return (
    <PageLayout>
      <SearchAndFilters />
      {!!fetchingInvoicesError.error && (
        <Alert severity="error">{fetchingInvoicesError.error}</Alert>
      )}
      <InvoicesTable />
    </PageLayout>
  );
}

export default InvoicePage;
