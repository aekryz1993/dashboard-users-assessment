import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Home, InvoiceList } from "@/pages";
import { invoiceListLoader } from "@/loaders";
import { QueryClient } from '@tanstack/react-query'

const router = (queryClient : QueryClient) => createBrowserRouter(
  createRoutesFromElements([
  <Route path="/" element={<Home />}>
    <Route index element={<InvoiceList />} loader={invoiceListLoader(queryClient)} />
  </Route>]),
)

export default router;