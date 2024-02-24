/*
https://docs.nestjs.com/providers#services
*/

import { DrizzleMySQLAdapter } from '@lucia-auth/adapter-drizzle';
import { Injectable } from '@nestjs/common';
import { Lucia,Session } from 'lucia';
import { sessionTable, userTable } from 'src/db/schema';

@Injectable()
export class LuciaService extends Lucia {
    constructor(private readonly db: Orm) {
        const adapter = new DrizzleMySQLAdapter(db, userTable as any, sessionTable);
        super(adapter, {
            sessionCookie: {
                attributes: {
                    secure: process.env.NODE_ENV === 'production',
                },
            },
            getSessionAttributes: (attributes) => {
                return {
                };
            }
        })
    }
}


declare module 'lucia' {
    interface Register {
        Lucia: InstanceType<typeof LuciaService>;
        DatabaseSessionAttributes: DatabaseSessionAttributes;
        Session:DatabaseSessionAttributes
    }
    interface DatabaseSessionAttributes {

    }
    interface DatabaseUserAttributes {
    }
    interface Session extends DatabaseSessionAttributes{}
    interface User extends DatabaseUserAttributes{}
    
}