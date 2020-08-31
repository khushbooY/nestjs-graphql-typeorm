
import { Mutation, Args, Resolver } from '@nestjs/graphql';
import { AuthCredentialsDto } from './dto/auth-credentials';
import { Query, Body } from '@nestjs/common';
import { User } from './user.entity';
import { AuthService } from './auth.service';

@Resolver(of =>User)
export class AuthResolver {

   constructor(   private authservice:AuthService){ }

@Mutation(returns => User)
async signUp(@Args('params') authcredentials:AuthCredentialsDto):Promise<User>{
    
    return   await this.authservice.SignUp(authcredentials)
 }

}
 