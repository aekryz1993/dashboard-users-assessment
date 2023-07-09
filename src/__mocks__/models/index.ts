import { Model, belongsTo } from "miragejs"

import type { ModelDefinition } from "miragejs/-types"
import type { InvoiceType, UserType } from "@/types/data"

const UserModel: ModelDefinition<UserType> = Model.extend({})
const InvoiceModel: ModelDefinition<InvoiceType> = Model.extend({
  user: belongsTo(),
})

export default {
  user: UserModel,
  invoice: InvoiceModel,
}