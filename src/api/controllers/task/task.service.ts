import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from 'src/api/schemas/task.schema';

@Injectable()
export class TaskService {

    constructor(@InjectModel(Task.name) private readonly taskModel: Model<TaskDocument>) {}


    async create(newTask: any): Promise<any> {
        return await this.taskModel.create(newTask);
    }

    async findAll(): Promise<any> {
        return await this.taskModel.find();
    }
}
