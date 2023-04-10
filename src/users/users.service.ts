import { TasksService } from './../tasks/tasks.service'
import { Inject, Injectable, forwardRef } from '@nestjs/common'
import { User } from './entities/user.entity'
import { InjectRepository } from '@nestjs/typeorm/dist'
import { Repository } from 'typeorm'
import { CreateUserInput } from './dto/create-user.input'
import { Task } from 'src/tasks/task.entity'
// import { UpdateUserInput } from './dto/update-user.input'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @Inject(forwardRef(() => TasksService)) private tasksService: TasksService
  ) {}

  create(createUserInput: CreateUserInput): Promise<User> {
    const newUser = this.userRepository.create(createUserInput)
    return this.userRepository.save(newUser)
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find()
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({
      where: {
        id
      }
    })
  }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`
  // }

  getUserTasks(userId: number): Promise<Task[]> {
    return this.tasksService.findUserTasks(userId)
  }
}
