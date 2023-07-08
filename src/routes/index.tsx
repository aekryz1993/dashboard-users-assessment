import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Home, Invoice } from "@/pages";
import routesList from "./routes-list";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route
      path={routesList.home}
      element={<Home />}
    >
      <Route path={routesList.invoice} element={<Invoice />} />
    </Route>
  ])
)

export default router;