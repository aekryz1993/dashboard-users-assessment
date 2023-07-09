import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Home, InvoiceList } from "@/pages";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route element={<Home />}>
      <Route index element={<InvoiceList />} />
    </Route>
  ])
)

export default router;