import { Module } from '@nestjs/common';
import { UserModule } from '../controllers/users/user.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { LocalAuthGuard } from './local-auth.guard';
@Module({
    providers: [AuthService, LocalStrategy, LocalAuthGuard],
    imports: [UserModule, PassportModule]
})
export class AuthModule {}
