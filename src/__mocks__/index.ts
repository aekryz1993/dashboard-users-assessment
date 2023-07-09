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
      invoice: RestSerializer.extend({
        include: ['user'],
        embed: true,
      }),
      application: JSONAPISerializer,
    },
    models: {
      user: UserModel,
      invoice: InvoiceModel,
    },
    seeds: (server) => seeds(server),
    routes() {
      this.namespace = "api";

      this.get("invoices", (schema, request) => {
        return schema.db.invoices
      })
    },
    environment: "development"
  });
}

export function makeServer() {
  return serverConfig(Server);
}
