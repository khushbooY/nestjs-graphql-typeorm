import { Module, Query } from '@nestjs/common';
import { TaskResolver } from './task.resolver';
import { TaskService } from './task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from './respository/task.repository';


@Module({
  imports:[TypeOrmModule.forFeature([TaskRepository])],
  providers: [TaskResolver, TaskService]
})
export class TaskModule {}
 