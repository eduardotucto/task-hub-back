import { Injectable } from '@nestjs/common'
import { Task } from './task.entity'
@Injectable()
export class TasksService {
  findAll(): Task[] {
    return [
      {
        id: 1,
        title: 'asd',
        description: 'asdasd',
        due_date: 1681080788015,
        priority: 'asdasd',
        status: 'asd',
        created_at: 1681080788015,
        updated_at: 1681080788015
      }
    ]
  }
}
