import { Injectable } from '@nestjs/common';
import { TaskRepository } from './respository/task.repository';
import { CreateTaskDto } from './dto/addTask.dto';
import {TaskEntity} from './entites/task.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { UpsertTaskDto } from './dto/upsertTask.dto';
import { ObjectID } from 'typeorm';

@Injectable()
export class TaskService {

constructor(@InjectRepository(TaskRepository) private taskrepository:TaskRepository){

}

    async getTaskService(){
        
        return "good"
    }

    async addTaskService(data:CreateTaskDto):Promise<TaskEntity>{
        
        return await this.taskrepository.addTask(data)
    }


    async updateTaskService( data:UpsertTaskDto):Promise<TaskEntity>{
        return await this.taskrepository.updateTask(data)

    }
}
