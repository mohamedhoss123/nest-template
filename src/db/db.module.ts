/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { connectionProvider, dbProvider } from './providers.js';

@Module({
    imports: [],
    controllers: [],
    providers: [dbProvider,connectionProvider],
    exports:[dbProvider]
})
export class DbModule {}
