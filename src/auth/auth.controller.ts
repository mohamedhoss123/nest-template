/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { CreateUesrDTO } from './dto/createUser.dto.js';

@Controller('auth')
export class AuthController {
  @Post('/login')
  login(@Body() body: CreateUesrDTO) {
    return body;
  }
  @Post('/register')
  register() {
    return '';
  }
}
