import * as schema from "./db/schema.js"
import { MySql2Database } from 'drizzle-orm/mysql2';

declare global {
  type Orm = MySql2Database<typeof schema>;
}
