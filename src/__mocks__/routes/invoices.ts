import { InvoicesQueryParams } from "@/types/data";
import type { Invoice, MirageServer, User } from "../types";

export function getInvoice(server: MirageServer) {
  server.get("/api/invoices", (schema, request) => {
    const queryParams: InvoicesQueryParams = request.queryParams;
    const take = queryParams.take ? parseInt(queryParams.take) : 10;
    const limit = queryParams.limit ? parseInt(queryParams.limit) : 0;
    const { filter } = queryParams;

    const data = schema.db.invoices
      .filter((invoice: Invoice) => filter ? invoice.status === filter : true)
      .slice(limit * take, take * (limit + 1))
      .map((invoice: Invoice) => {
        const { userId, ...restProps } = invoice;
        const user = schema.db.users.find(userId) as User;
        return { ...restProps, user };
      });

    return data;
  });
}
