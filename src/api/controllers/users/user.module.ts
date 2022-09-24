import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserRepository } from "src/api/repository/user.repository";
import { User, UserSchema } from "src/api/schemas/user.schema";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    controllers: [UserController],
    providers: [UserService, UserRepository],
    exports: [UserService]
})
export class UserModule {}