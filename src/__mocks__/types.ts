import { INVOICE_STATUS } from "@/types/enums";

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
