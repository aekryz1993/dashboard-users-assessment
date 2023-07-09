import { faker } from '@faker-js/faker';

export const generateCollectionDate = () => {
  const userCreatedAt = faker.date.past({ years: 5 });
  const now = new Date();
  const userUpdatedAt = faker.date.between({ from: userCreatedAt, to: now })
  const invoiceCreatedAt = faker.date.past({ years: 4 });
  const invoiceUpdatedAt = faker.date.between({ from: invoiceCreatedAt, to: now })
  return {
    userDates: {
      createdAt: userCreatedAt,
      updatedAt: userUpdatedAt,
    },
    invoiceDates: {
      createdAt: invoiceCreatedAt,
      updatedAt: invoiceUpdatedAt,
    }
  }
}

// export const {userDates, invoiceDates} = generateCollectionDate()