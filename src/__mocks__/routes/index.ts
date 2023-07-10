import { getInvoice } from "./invoices";
import type { MirageServer } from "../types";

function getRoutes(server: MirageServer) {
  getInvoice(server);
}

export default getRoutes;
