import { ObjectType, Field, Int, Float } from '@nestjs/graphql'
// import Long from 'long'

@ObjectType()
export class Task {
  @Field(() => Int)
  id: number

  @Field()
  title: string

  @Field()
  description: string

  @Field(() => Float)
  due_date: number

  @Field({ nullable: true })
  priority?: string

  @Field({ nullable: true })
  status?: string

  @Field(() => Float)
  created_at: number

  @Field(() => Float)
  updated_at: number
}
