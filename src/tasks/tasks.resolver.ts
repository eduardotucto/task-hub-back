import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { TasksService } from './tasks.service'
import { Task } from './task.entity'
import { CreateTaskInput } from './dto/create-task.input'

@Resolver()
export class TasksResolver {
  constructor(private tasksService: TasksService) {}

  @Query(() => [Task])
  tasks() {
    return this.tasksService.findAll()
  }

  @Mutation(() => Task)
  createTask(@Args('taskInput') taskInput: CreateTaskInput) {
    return this.tasksService.createTask(taskInput)
  }
}
