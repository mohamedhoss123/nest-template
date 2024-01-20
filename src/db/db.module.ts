/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { dbProvider } from './providers';

@Module({
    imports: [],
    controllers: [],
    providers: [dbProvider],
})
export class DbModule {}
