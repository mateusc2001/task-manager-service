import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Public } from 'src/api/auth/guards/jwt-auth.guard';
import { TaskService } from 'src/api/controllers/task/task.service';

@Controller('task')
export class TaskController {

    constructor(private readonly taskService: TaskService) {}
    
    @Public()
    @Post()
    async create(@Body() requestBody): Promise<any> {
        return this.taskService.create(requestBody);
    }
    
    @Public()
    @Get()
    async findAll(): Promise<any> {
        return this.taskService.findAll();
    }

    @Public()
    @Put(':id')
    async setAsDone(@Param('id') id, @Body() body): Promise<any> {
        return this.taskService.update(id, body);
    }

    @Public()
    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
        return this.taskService.delete(id);
    }
}
