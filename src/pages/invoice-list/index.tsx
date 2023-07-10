/** @jsxImportSource @emotion/react */
import { SearchAndFilters } from "@/components";
import { PageLayout } from "@/layouts";
import routesList from "@/routes/routes-list";
import { Link } from "react-router-dom";
import InvoicesTable from "./InvoicesTable";

function InvoicePage() {
  return (
    <PageLayout>
      <Link to={routesList.analytics}>TO ANALYTICS</Link>
      <SearchAndFilters />
      <InvoicesTable />
    </PageLayout>
  );
}

export default InvoicePage;
