import { INVOICES_SORT_COLUMN, INVOICE_STATUS, SORT_DIRECTION } from "./enums";

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

export type InvoicesQueryParams = {
  take?: string;
  limit?: string;
  search?: string;
  filter?: INVOICE_STATUS;
  sort?: INVOICES_SORT_COLUMN;
  direction?: SORT_DIRECTION;
};
