import { Controller, Get } from '@nestjs/common';
import { TaskService } from './service/task.service';

@Controller('task')
export class TaskController {

    constructor(private readonly taskService: TaskService) {}

    @Get()
    getHelloWorld(): string {
        return this.taskService.getTask();
    }
}
