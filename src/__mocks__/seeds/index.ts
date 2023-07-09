import type { Server } from "miragejs";
import { createDBCollections } from "./data";

export default function seeds(server: Server) {
  server.db.loadData(createDBCollections())
}