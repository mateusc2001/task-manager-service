import { Body, Controller, Post } from '@nestjs/common';
import { UserModel } from 'src/api/model/user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() requestBody): Promise<UserModel> {
        return this.userService.create(requestBody);
    }
}
