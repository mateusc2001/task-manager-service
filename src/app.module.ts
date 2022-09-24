import { Module } from '@nestjs/common';
import { TaskModule } from './api/controllers/task/task.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TaskModule,
    MongooseModule.forRoot('mongodb+srv://mateus:1908@cluster0.f0bostk.mongodb.net/task_manager_db?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
