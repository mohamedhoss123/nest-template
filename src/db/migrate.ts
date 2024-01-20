import { NestFactory } from "@nestjs/core";
import { DbModule } from "./db.module";
import { migrate } from 'drizzle-orm/mysql2/migrator';

async function bootstrap() {
    const app = await NestFactory.create(DbModule);
    const db = app.get('DB');

    await migrate(db, { migrationsFolder: 'drizzle' });
    // Now you can use myService outside of the application
}
bootstrap();