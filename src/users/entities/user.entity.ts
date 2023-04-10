import { ObjectType, Field, Int, Float } from '@nestjs/graphql'
import { Task } from 'src/tasks/task.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number

  @Column()
  @Field()
  name: string

  @Column()
  @Field()
  email: string

  @Column()
  @Field()
  password: string

  @Column({ nullable: true })
  @Field(() => Float, { nullable: true })
  created_at?: number

  @OneToMany(() => Task, task => task.user)
  @Field(() => [Task], { nullable: true })
  tasks: Task[]
}
