import { Injectable } from '@nestjs/common';
import { UserService } from '../controllers/users/user.service';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UserService) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findByUserName(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}
