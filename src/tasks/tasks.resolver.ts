import { Query, Resolver } from '@nestjs/graphql'
import { TasksService } from './tasks.service'
import { Task } from './task.entity'

@Resolver()
export class TasksResolver {
  constructor(private tasksServide: TasksService) {}

  @Query(() => [Task])
  tasks() {
    return this.tasksServide.findAll()
  }
}
