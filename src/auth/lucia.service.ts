/*
https://docs.nestjs.com/providers#services
*/

import { DrizzleMySQLAdapter } from '@lucia-auth/adapter-drizzle';
import { Inject, Injectable } from '@nestjs/common';
import { Lucia,Session } from 'lucia';
import { sessionTable, userTable } from '../db/schema.js';

@Injectable()
export class LuciaService extends Lucia {
    constructor(@Inject("DB") public readonly  db: Orm) {
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
    
    interface Session extends DatabaseSessionAttributes{}
    interface User extends DatabaseUserAttributes{}

    interface DatabaseSessionAttributes {

    }
    interface DatabaseUserAttributes {

    }
    
}