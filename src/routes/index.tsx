import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Home, Invoice } from "@/pages";
import routesList from "./routes-list";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route element={<Home />}>
      <Route index element={<Invoice />} />
    </Route>
  ])
)

export default router;