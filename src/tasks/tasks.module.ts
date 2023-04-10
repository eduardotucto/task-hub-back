import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { TasksService } from './tasks.service'
import { TasksResolver } from './tasks.resolver'
import { Task } from './task.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  providers: [TasksService, TasksResolver]
})
export class TasksModule {}
