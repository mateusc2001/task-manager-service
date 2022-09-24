import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TaskService } from "src/api/controllers/task/task.service";
import { Task, TaskSchema } from "src/api/schemas/task.schema";
import { TaskController } from "./task.controller";

@Module({
    imports: [MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }])],
    controllers: [TaskController],
    providers: [TaskService]
})
export class TaskModule {}