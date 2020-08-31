import { TaskEntity } from "../entites/task.entity";
import { Repository, EntityRepository, ObjectID } from "typeorm";
import { CreateTaskDto } from "../dto/addTask.dto";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { UpsertTaskDto } from "../dto/upsertTask.dto";



@EntityRepository(TaskEntity)
export class TaskRepository extends Repository<TaskEntity>{

    async addTask(data:CreateTaskDto):Promise<any>{
      try {

        const response = await this.save({...data});
        return response;
    } catch (error) {

        if (error.detail) {
            throw new ConflictException(error.detail);
        } else {
            throw new InternalServerErrorException();
        }
    }
    } 


    async updateTask(body : UpsertTaskDto) : Promise<TaskEntity> {
        const data = await this.findOne(body.id);
        if(!data){
            throw new ConflictException(`${body.id} not found`)
        }
        try {
            Object.keys(data).map(key => {
                if (body[key]) {
                    data[key] = body[key]
                }
            });
            await this.save(data);
            return data;
        } catch (error) {
            if (error.detail) {
                throw new ConflictException(error.detail);
            } else {
                throw new InternalServerErrorException();
            }
        }
    }
} 