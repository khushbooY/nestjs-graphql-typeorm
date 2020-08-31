import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/addTask.dto';
import { TaskEntity } from './entites/task.entity';
import { UpsertTaskDto } from './dto/upsertTask.dto';
import { ObjectID } from 'typeorm';
@Resolver(() => TaskEntity)
export class TaskResolver {



  constructor(private taskService:TaskService){

  }

@Query(returns => String)
async getTask(){
return this.taskService.getTaskService()
}

@Mutation(()=> TaskEntity)
async addTask(@Args("CreateInput") create:CreateTaskDto):Promise<TaskEntity>{

  return await this.taskService.addTaskService(create)
}

@Mutation(()=> TaskEntity)
async updateTask(@Args("UpdateInput") Update: UpsertTaskDto): Promise<TaskEntity> {        

  return this.taskService.updateTaskService(Update);
 
}
}
