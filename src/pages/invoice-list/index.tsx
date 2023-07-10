/** @jsxImportSource @emotion/react */
import { Suspense } from "react";
import { SearchAndFilters, Table } from "@/components";
import { PageLayout } from "@/layouts";
import routesList from "@/routes/routes-list";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function InvoicePage() {
  return (
    <PageLayout>
      <Link to={routesList.analytics}>TO ANALYTICS</Link>
      <SearchAndFilters />
      <Suspense
        fallback={
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        }
      >
        <Table />
      </Suspense>
    </PageLayout>
  );
}

export default InvoicePage;
