import { Injectable } from '@nestjs/common';
import { UserService } from '../controllers/users/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UserService,
        private readonly jwtService: JwtService) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findByUserName(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        let userDTO = await this.userService.findByUserName(user.username);
        userDTO.password = null;
        const payload = { username: userDTO, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
