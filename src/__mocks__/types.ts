import { INVOICE_STATUS } from "@/types/enums";
import type { Registry, Server } from "miragejs";
import type { AnyFactories, AnyModels } from "miragejs/-types";
export interface CommonProps {
  id: string;
  createdAt: Date;
  updatedAt: Date;
} 

export interface User extends CommonProps {
  firstName: string;
  lastName: string;
  avatarUrl: string;
  email: string;
}

export interface Invoice extends CommonProps {
  userId: string;
  date: Date;
  status: INVOICE_STATUS;
  favorite: boolean;
}

export interface QueryParams {
  limit: number;
  skip: number;
}

export type MirageServer = Server<Registry<AnyModels, AnyFactories>>