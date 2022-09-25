import { Body, Controller, HttpException, HttpStatus, Post, UseFilters, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/api/auth/guards/jwt-auth.guard';
import { ForbiddenException } from 'src/api/handlers/exception/forbidden.exception';
import { HttpExceptionFilter } from 'src/api/handlers/http-exception.filter';
import { UserModel } from 'src/api/model/user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() requestBody): Promise<UserModel> {
        return this.userService.create(requestBody);
    }
}
