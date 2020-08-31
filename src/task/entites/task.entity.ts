import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@Entity('taskentity')
@ObjectType('taskentity')
export class TaskEntity  extends BaseEntity{
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

}