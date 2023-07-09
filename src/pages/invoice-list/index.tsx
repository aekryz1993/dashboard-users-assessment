/** @jsxImportSource @emotion/react */
import { SearchAndFilters } from "@/components";
import { PageLayout } from "@/layouts";
import { useLoaderData } from "react-router-dom";

function InvoicePage() {
  const data = useLoaderData()
  console.log(data)

  return <PageLayout>
    <SearchAndFilters />
  </PageLayout>
}

export default InvoicePage;