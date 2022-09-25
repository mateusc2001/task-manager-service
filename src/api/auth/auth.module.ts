import { Module } from '@nestjs/common';
import { UserModule } from '../controllers/users/user.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategy/jwt.strategy';
import { LocalStrategy } from './strategy/local.strategy';

@Module({
    providers: [AuthService, LocalStrategy, LocalAuthGuard, JwtStrategy],
    exports: [AuthService],
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '6h' },
        })
    ]
})
export class AuthModule { }
