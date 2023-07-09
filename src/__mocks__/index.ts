import { JSONAPISerializer, Server as MirageServer, RestSerializer, Server } from "miragejs";
import { Model, belongsTo } from "miragejs"
import seeds from "./seeds";

import type { ModelDefinition } from "miragejs/-types"
import { Invoice, User } from "./types";

const UserModel: ModelDefinition<User> = Model.extend({})
const InvoiceModel: ModelDefinition<Invoice> = Model.extend({
  user: belongsTo(),
})

export function serverConfig(Server: typeof MirageServer): MirageServer {
  return new Server({
    serializers: {
      // invoice: RestSerializer.extend({
      //   include: ['user'],
      // }),
      application: JSONAPISerializer,
    },
    models: {
      user: UserModel,
      invoice: InvoiceModel,
    },
    seeds,
    routes() {
      this.get("/api/invoices", (schema, request) => {
        return schema.db.invoices.map((invoice: Invoice) => {
          const { userId, ...restProps } = invoice;
          const user = schema.db.users.find(userId) as User
          return {...restProps, user}
        })
      })
    },
    environment: "development"
  });
}

export function makeServer() {
  return serverConfig(Server);
}
