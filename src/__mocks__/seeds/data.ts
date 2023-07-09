import { faker } from "@faker-js/faker";
import { INVOICE_STATUS } from "@/types/enums";

import type { CommonProps, Invoice, User } from "../types";

type Dates = Pick<CommonProps, "createdAt" | "updatedAt">;

const generateCollectionDate: () => {
  invoiceDates: Dates;
  userDates: Dates;
} = () => {
  const userCreatedAt = faker.date.past({ years: 5 });
  const now = new Date();
  const userUpdatedAt = faker.date.between({ from: userCreatedAt, to: now });
  const invoiceCreatedAt = faker.date.between({ from: userCreatedAt, to: now });
  const invoiceUpdatedAt = faker.date.between({
    from: invoiceCreatedAt,
    to: now,
  });
  return {
    userDates: {
      createdAt: userCreatedAt,
      updatedAt: userUpdatedAt,
    },
    invoiceDates: {
      createdAt: invoiceCreatedAt,
      updatedAt: invoiceUpdatedAt,
    },
  };
};

const createUser: (userDates: Dates) => User = (userDates) => ({
  id: faker.string.uuid(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  avatarUrl: faker.internet.avatar(),
  email: faker.internet.email(),
  createdAt: userDates.createdAt,
  updatedAt: userDates.updatedAt,
});

const createInvoice: ({userId, invoiceDates}: {userId: string, invoiceDates: Dates}) => Invoice = ({userId, invoiceDates}) =>
  ({
    id: faker.string.uuid(),
    userId,
    date: faker.date.past({ years: 4 }),
    favorite: faker.datatype.boolean({ probability: 0.2 }),
    status: Object.values(INVOICE_STATUS)[faker.number.int({ min: 0, max: 2 })],
    createdAt: invoiceDates.createdAt,
    updatedAt: invoiceDates.updatedAt
  });

export const createDBCollections = () => {
  const users: User[] = [];
  const invoices: Invoice[] = [];
  Array.from(Array(100).values()).forEach(() => {
    const {invoiceDates, userDates} = generateCollectionDate();
    const user = createUser(userDates);
    users.push(user);
    const invoice = createInvoice({invoiceDates, userId: user.id});
    invoices.push(invoice);
  })
  return {
    users,
    invoices,
  }
}