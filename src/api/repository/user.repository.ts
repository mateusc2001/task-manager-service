import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserModel } from "../model/user.model";
import { User, UserDocument } from "../schemas/user.schema";

@Injectable()
export class UserRepository {

    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>){}


    async create(newUser: UserModel): Promise<any> {
        return this.userModel.create(newUser);
    }
    async findByUsername(username: string): Promise<any> {
        return this.userModel.findOne({ username: username });
    }
}