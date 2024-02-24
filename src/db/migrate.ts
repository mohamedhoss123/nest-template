import { NestFactory } from '@nestjs/core';
import { DbModule } from './db.module.js';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import { config } from "dotenv";
config()
async function bootstrap() {
  const app = await NestFactory.create(DbModule);
  const db = app.get('DB');
  const connection = app.get("DB_CONNECTION")
  await migrate(db, { migrationsFolder: 'drizzle' });
  await connection.end()
  // Now you can use myService outside of the application
}
bootstrap();
