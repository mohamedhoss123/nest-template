import { AuthService } from './auth.service.js';
import { AuthController } from './auth.controller.js';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module.js';
import { LuciaService } from './lucia.service.js';

@Module({
  imports: [DbModule],
  controllers: [AuthController],
  providers: [AuthService,LuciaService],
})
export class AuthModule {}
