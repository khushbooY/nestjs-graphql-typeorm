
import { InputType,ObjectType, Field } from "@nestjs/graphql";

@ObjectType("authcredit")
@InputType("authcredit")
export class AuthCredentialsDto{
    @Field()
    username:string

    @Field()
    password:string
} 