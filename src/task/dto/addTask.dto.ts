import { InputType,ObjectType, Field } from "@nestjs/graphql";

@ObjectType({ isAbstract: true })
@InputType({ isAbstract: true })
export class CreateTaskDto {

   @Field()
    name: string;

    @Field()
    priority:string
   
  }