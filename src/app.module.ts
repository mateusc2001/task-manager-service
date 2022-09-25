import { forwardRef, Module } from '@nestjs/common';
import { TaskModule } from './api/controllers/task/task.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './api/controllers/users/user.module';
import { AuthModule } from './api/auth/auth.module';
import { AuthService } from './api/auth/auth.service';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './api/auth/guards/jwt-auth.guard';
import { HttpExceptionFilter } from './api/handlers/http-exception.filter';
import { MongoExceptionFilter } from './api/handlers/mongo-exception.filter';
// import { MongoExceptionFilter } from './api/handlers/mongo-exception.filter';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://mateus:1908@cluster0.f0bostk.mongodb.net/task_manager_db?retryWrites=true&w=majority'),
    TaskModule,
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter
    },
    {
      provide: APP_FILTER,
      useClass: MongoExceptionFilter
    }
  ],
})
export class AppModule { }
