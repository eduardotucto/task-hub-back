import { Inject, Injectable, forwardRef } from '@nestjs/common'
import { Task } from './task.entity'
import { InjectRepository } from '@nestjs/typeorm/dist'
import { Repository } from 'typeorm'
import { CreateTaskInput } from './dto/create-task.input'
import { User } from 'src/users/entities/user.entity'
import { UsersService } from 'src/users/users.service'
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private tasksReposiroty: Repository<Task>,
    @Inject(forwardRef(() => UsersService)) private userService: UsersService
  ) {}

  findAll(): Promise<Task[]> {
    return this.tasksReposiroty.find()
  }

  findUserTasks(userId: number): Promise<Task[]> {
    return this.tasksReposiroty.find({
      where: {
        userId
      }
    })
  }

  findTaskById(id: number): Promise<Task> {
    return this.tasksReposiroty.findOne({
      where: {
        id
      }
    })
  }

  createTask(task: CreateTaskInput): Promise<Task> {
    const newTask = this.tasksReposiroty.create(task)
    return this.tasksReposiroty.save(newTask)
  }

  getUser(userId: number): Promise<User> {
    return this.userService.findOne(userId)
  }
}
