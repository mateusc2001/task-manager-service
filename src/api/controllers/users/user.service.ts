import { Injectable } from '@nestjs/common';
import { UserModel } from 'src/api/model/user.model';
import { UserRepository } from 'src/api/repository/user.repository';

@Injectable()
export class UserService {

    constructor(private readonly userRepo: UserRepository) {}

    async create(newUser: UserModel): Promise<UserModel> {
        return this.userRepo.create(newUser);
    }
    
    async findByUserName(username: string): Promise<UserModel> {
        return this.userRepo.findByUsername(username);
    }

    async findAll(): Promise<UserModel> {
        return this.userRepo.findAll();
    }

    async findById(id: string): Promise<UserModel> {
        return this.userRepo.findById(id);
    }
}
