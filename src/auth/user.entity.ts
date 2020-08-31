import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field } from "@nestjs/graphql";

@Entity('UserEntity')
@ObjectType('UserEntity')
export class User extends BaseEntity{
@PrimaryGeneratedColumn()
@Field()
id?:number

@Column()
@Field()
username:string

@Column()
@Field()
password:string


}