import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { TaskService } from 'src/api/controllers/task/task.service';

@Controller('task')
export class TaskController {

    constructor(private readonly taskService: TaskService) {}

    @Post()
    async create(@Body() requestBody): Promise<any> {
        return this.taskService.create(requestBody);
    }

    @Get()
    async findAll(): Promise<any> {
        return this.taskService.findAll();
    }
}
