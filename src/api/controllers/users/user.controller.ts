import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, UseFilters, UseGuards } from '@nestjs/common';
import { JwtAuthGuard, Public } from 'src/api/auth/guards/jwt-auth.guard';
import { HttpExceptionFilter } from 'src/api/handlers/http-exception.filter';
import { UserModel } from 'src/api/model/user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Public()
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() requestBody): Promise<UserModel> {
        return this.userService.create(requestBody);
    }

    @Public()
    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(): Promise<UserModel> {
        return this.userService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async findById(@Param('id') id): Promise<UserModel> {
        return this.userService.findById(id);
    }

    @Public()
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id): Promise<UserModel> {
        return this.userService.delete(id);
    }
}
