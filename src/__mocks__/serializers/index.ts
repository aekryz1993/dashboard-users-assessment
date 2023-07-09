import { RestSerializer } from "miragejs";

export default {
  invoice: RestSerializer.extend({
    include: ['user'],
    embed: true,
  })
}