import { Provider } from '@nestjs/common';

import * as mysql from 'mysql2/promise';
import { drizzle } from 'drizzle-orm/mysql2';
export const dbProvider: Provider = {
  provide: 'DB',
  useFactory: (connection: mysql.Connection) => {
    return drizzle(connection);
  },
  inject: ['DB_CONNECTION'],
};
export const connectionProvider: Provider = {
  provide: 'DB_CONNECTION',
  useFactory: async () => {
    return await mysql.createConnection(process.env['DATABASE_URL']);
  },
};
