import { TypeOrmModule } from '@nestjs/typeorm'
import { Module, forwardRef } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersResolver } from './users.resolver'
import { User } from './entities/user.entity'
import { TasksModule } from 'src/tasks/tasks.module'

@Module({
  imports: [TypeOrmModule.forFeature([User]), forwardRef(() => TasksModule)],
  exports: [UsersService],
  providers: [UsersResolver, UsersService]
})
export class UsersModule {}
