/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { CreateUesrDTO } from './dto/createUser.dto';

@Controller("auth")
export class AuthController {
    @Post()
    manga(@Body()body:CreateUesrDTO){
        return body;
    }
}
