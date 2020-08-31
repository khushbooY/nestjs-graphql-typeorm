import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { AuthCredentialsDto } from "./dto/auth-credentials";
import { ObjectType } from "@nestjs/graphql";

@EntityRepository(User)
export class UserRepo extends Repository<User>{
    async SignUp(authCredentails:AuthCredentialsDto):Promise<any>{
        const {username,password}=authCredentails
        const user=new User()
        user.username=username
        user.password=password

       return await user.save();

    }

}