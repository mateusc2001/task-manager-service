import { Module } from "@nestjs/common";
import { TaskService } from "./service/task/task.service";
import { TaskController } from "./task.controller";

@Module({
    imports: [],
    controllers: [TaskController],
    providers: [TaskService]
})
export class TaskModule {}