import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { TasksService } from './tasks.service'
import { Task } from './task.entity'
import { CreateTaskInput } from './dto/create-task.input'
import { User } from 'src/users/entities/user.entity'

@Resolver(() => Task)
export class TasksResolver {
  constructor(private tasksService: TasksService) {}

  @Query(() => [Task])
  tasks() {
    return this.tasksService.findAll()
  }

  @Query(() => Task)
  task(@Args('id') id: number) {
    return this.tasksService.findTaskById(id)
  }

  @ResolveField(() => User)
  user(@Parent() task: Task): Promise<User> {
    return this.tasksService.getUser(task.userId)
  }

  @Mutation(() => Task)
  createTask(@Args('taskInput') taskInput: CreateTaskInput) {
    return this.tasksService.createTask(taskInput)
  }
}
