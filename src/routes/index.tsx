import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Home, InvoiceList, EmptyPage } from "@/pages";
import { invoiceListLoader } from "@/loaders";
import { QueryClient } from "@tanstack/react-query";
import routesList from "./routes-list";

const router = (queryClient: QueryClient) =>
  createBrowserRouter(
    createRoutesFromElements([
      <Route path="/" element={<Home />}>
        <Route
          index
          element={<InvoiceList />}
          loader={invoiceListLoader(queryClient)}
        />
        <Route
          path={routesList.analytics}
          element={<EmptyPage />}
        />
        <Route
          path={routesList.dashboard}
          element={<EmptyPage />}
        />
        <Route
          path={routesList.calendar}
          element={<EmptyPage />}
        />
        <Route
          path={routesList.schedule}
          element={<EmptyPage />}
        />
        <Route
          path={routesList.notification}
          element={<EmptyPage />}
        />
        <Route
          path={routesList.messages}
          element={<EmptyPage />}
        />
        <Route
          path={routesList.settings}
          element={<EmptyPage />}
        />
      </Route>,
    ]),
  );

export default router;
