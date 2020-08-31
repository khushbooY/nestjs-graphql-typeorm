import { InputType, ObjectType, Field } from "@nestjs/graphql";
import { CreateTaskDto } from "./addTask.dto";

@ObjectType("updateTask")
@InputType("updateTask")
export class UpsertTaskDto {
  @Field({nullable:true})
    id:number;

    @Field()
    name:string

    @Field()
    priority:string

  
  }