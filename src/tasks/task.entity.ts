import { ObjectType, Field, Int, Float } from '@nestjs/graphql'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
@ObjectType()
export class Task {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number

  @Column()
  @Field()
  title: string

  @Column()
  @Field()
  description: string

  @Column()
  @Field(() => Float)
  due_date: number

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
}
