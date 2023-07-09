import { INVOICE_STATUS } from "./enums";

export interface DateCollectionType {
  createdAt?: Date;
  updatedAt: Date;
}

export interface UserType {
  id: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
  email: string;
  createdAt?: Date;
  updatedAt: Date;
}

export interface InvoiceType {
  id: string;
  user: UserType;
  date: Date;
  status: INVOICE_STATUS;
  favorite: boolean;
  createdAt?: Date;
  updatedAt: Date;
}
