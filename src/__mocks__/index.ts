import { Server as MirageServer, Server } from "miragejs";
import { Model, belongsTo } from "miragejs"
import seeds from "./seeds";
import getRoutes from "./routes";

import type { ModelDefinition } from "miragejs/-types"
import type { Invoice, User } from "./types";

const UserModel: ModelDefinition<User> = Model.extend({})
const InvoiceModel: ModelDefinition<Invoice> = Model.extend({
  user: belongsTo(),
})

export function serverConfig(Server: typeof MirageServer): MirageServer {
  return new Server({
    models: {
      user: UserModel,
      invoice: InvoiceModel,
    },
    seeds,
    routes() {
      getRoutes(this)
    },
    environment: "development"
  });
}

export function makeServer() {
  return serverConfig(Server);
}
