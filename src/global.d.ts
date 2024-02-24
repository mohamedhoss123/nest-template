import type { MySqlDatabase } from 'drizzle-orm/mysql-core';
declare global {
  type Orm = MySqlDatabase<any, any>;
}
