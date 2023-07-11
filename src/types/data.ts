import { INVOICES_SORT_COLUMN, INVOICE_STATUS, SORT_DIRECTION } from "./enums";
import { TableDataParams} from "./utils";

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
  date: Date | string;
  status: INVOICE_STATUS;
  favorite: boolean;
  createdAt?: Date;
  updatedAt: Date;
}

export interface InvoicesResponseData extends Omit<TableDataParams<InvoiceType>, "data"> {
  data: InvoiceType[];
}

export type InvoicesQueryParams = {
  limit?: string;
  skip?: string;
  search?: string;
  filterStatus?: INVOICE_STATUS;
  filterDateStart?: string;
  filterDateEnd?: string;
  sort?: INVOICES_SORT_COLUMN;
  direction?: SORT_DIRECTION;
};

export type SortColumnDirectionType = {
  ID: "ID";
  NAME: "NAME";
  EMAIL: "EMAIL";
  DATE: "DATE";
  STATUS: "STATUS";
}