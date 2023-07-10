import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider as JotaiProvider } from "jotai";
import router from "./routes";
import store from "./store";
import { makeServer } from "./__mocks__";
import "./assets/scss/core.scss";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <JotaiProvider store={store}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <RouterProvider router={router(queryClient)} />
        </LocalizationProvider>
      </JotaiProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);
