import { Injectable } from '@nestjs/common';
import { UserRepo } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials';
import { User } from './user.entity';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepo)
        private userRepo:UserRepo){

    }

    async SignUp(authCredentails:AuthCredentialsDto):Promise<User>{
       return  await this.userRepo.SignUp(authCredentails)

    }

}
