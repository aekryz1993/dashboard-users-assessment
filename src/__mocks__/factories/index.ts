import { UserType } from '@/types/data';
import { INVOICE_STATUS } from '@/types/enums';
import { faker } from '@faker-js/faker';
import { Factory, Server, trait } from 'miragejs';
import { generateCollectionDate } from '../helpers';

export const {userDates, invoiceDates} = generateCollectionDate()

export default {
  user: Factory.extend({
    id() {
      return faker.string.uuid()
    },
    firstName() {
      return faker.person.firstName()
    },
    lastName() {
      return faker.person.lastName()
    },
    avatarUrl() {
      return faker.internet.avatar()
    },
    email() {
      return faker.internet.email()
    },
    createdAt() {
      return userDates.createdAt;
    },
    updatedAt() {
      return userDates.updatedAt;
    },

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    withInvoice: trait({
      afterCreate(user: UserType, server: Server) {
        server.create('invoice', {
          id: faker.string.uuid(),
          user,
          date: faker.date.past({ years: 4 }),
          favorite: faker.datatype.boolean({ probability: 0.2 }),
          status: Object.values(INVOICE_STATUS)[faker.number.int({ min: 0, max: 2 })],
          ...invoiceDates,
        })
      }
    })
  })
}