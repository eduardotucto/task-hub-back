import { ObjectType, Field, Int, Float } from '@nestjs/graphql'
import { User } from 'src/users/entities/user.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
@ObjectType()
export class Task {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number

  @Column()
  @Field()
  title: string

  @Column({ nullable: true })
  @Field({ nullable: true })
  description?: string

  @Column({ nullable: true })
  @Field(() => Float, { nullable: true })
  due_date?: number

  @Column({ nullable: true })
  @Field({ nullable: true })
  priority?: string

  @Column({ nullable: true })
  @Field({ nullable: true })
  status?: string

  @Column()
  @Field(() => Float)
  created_at: number

  @Column()
  @Field(() => Float)
  updated_at: number

  @Column()
  @Field(() => Int)
  userId: number

  @ManyToOne(() => User, user => user.tasks)
  @Field(() => User)
  user: User
}
