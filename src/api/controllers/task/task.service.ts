import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from 'src/api/schemas/task.schema';

@Injectable()
export class TaskService {

    constructor(@InjectModel(Task.name) private readonly taskModel: Model<TaskDocument>) { }


    async create(newTask: any): Promise<any> {
        return await this.taskModel.create(newTask);
    }

    async findAll(): Promise<any> {
        return await this.taskModel.find()
        .populate({ path: 'assigned', select: '-password'})
        .populate({ path: 'userCreated', select: '-password'});
    }

    async update(id: string, updatedTask: any): Promise<any> {
        return await this.taskModel.updateOne({ _id: id }, updatedTask);
    }

    async deleteAssigned(id: string): Promise<any> {
        return await this.taskModel.updateOne({ _id: id }, { assigned: null });
    }

    async assignedUser(id: string, idUser: string): Promise<any> {
        return await this.taskModel.updateOne({ _id: id }, { assigned: idUser });
    }

    async delete(id: string): Promise<any> {
        return await this.taskModel.deleteOne({ _id: id });
    }

    async findByUserCreated(id: string): Promise<any> {
        return await this.taskModel.find({ userCreated: id });
    }

    async updateMany(taskList: any[]): Promise<any> {
        return await this.taskModel.updateMany(taskList);
    }
}
