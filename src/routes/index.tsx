import { createBrowserRouter, createRoutesFromElements, Link, Route } from "react-router-dom";
import { Home, InvoiceList } from "@/pages";
import { invoiceListLoader } from "@/loaders";
import { QueryClient } from '@tanstack/react-query'
import routesList from "./routes-list";


const router = (queryClient : QueryClient) => createBrowserRouter(
  createRoutesFromElements([
  <Route path="/" element={<Home />}>
    <Route index element={<InvoiceList />} loader={invoiceListLoader(queryClient)} />
    <Route path={routesList.analytics} element={<Link to='/'>TO INVOICE LIST</Link>} />
  </Route>]),
)

export default router;