import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Home, InvoiceList, EmptyPage } from "@/pages";
import { invoiceListLoader } from "@/loaders";
import { QueryClient } from "@tanstack/react-query";
import routesList from "./routes-list";
import { Children } from "react";
import { ErrorBoundary } from "@/components";

import type { RouteName } from "@/types/utils";

const router = (queryClient: QueryClient) =>
  createBrowserRouter(
    createRoutesFromElements([
      <Route path="/" element={<Home />}>
        <Route
          index
          element={<InvoiceList />}
          loader={invoiceListLoader(queryClient)}
          errorElement={<ErrorBoundary />}
        />
        {Children.map(Object.keys(routesList) as (keyof RouteName)[], (child) => (
          <Route path={routesList[child]} element={<EmptyPage />} />
        ))}
      </Route>,
    ]),
  );

export default router;
