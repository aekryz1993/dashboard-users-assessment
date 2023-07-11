/** @jsxImportSource @emotion/react */
import { SearchAndFilters } from "@/components";
import { PageLayout } from "@/layouts";
import InvoicesTable from "./InvoicesTable";

function InvoicePage() {
  return (
    <PageLayout>
      <SearchAndFilters />
      <InvoicesTable />
    </PageLayout>
  );
}

export default InvoicePage;
