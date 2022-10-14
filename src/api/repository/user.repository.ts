import { HttpException, HttpStatus, Injectable, UseFilters } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserModel } from "../model/user.model";
import { User, UserDocument } from "../schemas/user.schema";

@Injectable()
export class UserRepository {

    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) { }

    async create(newUser: UserModel): Promise<any> {
        return this.userModel.create(newUser);
    }
    
    async findByUsername(username: string): Promise<any> {
        return this.userModel.findOne({ username: username });
    }

    async findAll(): Promise<any> {
        return this.userModel.find();
    }

    async findById(id: string): Promise<any> {
        return this.userModel.findById(id);
    }

    async delete(id: string): Promise<any> {
        return this.userModel.findByIdAndDelete(id);
    }
}