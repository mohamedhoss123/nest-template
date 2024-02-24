/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { LuciaService } from './lucia.service.js';

@Injectable()
export class AuthService {
    constructor(public auth: LuciaService) { }
    
}
