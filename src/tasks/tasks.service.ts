import { Injectable } from '@nestjs/common'
import { Task } from './task.entity'
import { InjectRepository } from '@nestjs/typeorm/dist'
import { Repository } from 'typeorm'
import { CreateTaskInput } from './dto/create-task.input'
@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private tasksReposiroty: Repository<Task>) {}

  findAll(): Promise<Task[]> {
    return this.tasksReposiroty.find()
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
}
