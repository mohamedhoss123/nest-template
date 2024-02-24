import 'dotenv/config';
import type { Config } from 'drizzle-kit';
const config : Config = {
    schema: './src/db/schema.ts',
    out: './drizzle',
    driver: 'mysql2', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
    dbCredentials: {
        uri: process.env["DATABASE_URL"] || ""
    }
};

export default config