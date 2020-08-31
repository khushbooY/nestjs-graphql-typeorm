import { Module } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepo } from './user.repository';

@Module({
  imports:[TypeOrmModule.forFeature([UserRepo])],
  providers: [AuthService,AuthResolver]
})
export class AuthModule {}
