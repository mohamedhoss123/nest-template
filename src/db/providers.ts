import { Provider } from "@nestjs/common";
import * as mysql from 'mysql2/promise';
import { drizzle } from "drizzle-orm/mysql2";
export let dbProvider: Provider =
{
    provide: 'DB',
    useFactory: async () => {
        const connection = await mysql.createConnection(process.env["DB_STRING"]);

        return drizzle(connection);
    },
}

