import { Injectable } from '@nestjs/common'
import { Task } from './task.entity'
import { InjectRepository } from '@nestjs/typeorm/dist'
import { Repository } from 'typeorm'
@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private tasksReposiroty: Repository<Task>) {}
  findAll(): Promise<Task[]> {
    return this.tasksReposiroty.find()
  }
}
