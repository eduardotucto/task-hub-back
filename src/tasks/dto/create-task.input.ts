import { Field, Float, InputType, Int } from '@nestjs/graphql'
import { IsInt, IsNotEmpty, MaxLength } from 'class-validator'

@InputType()
export class CreateTaskInput {
  @IsNotEmpty()
  @MaxLength(10)
  @Field()
  title: string

  @Field({ nullable: true })
  description?: string

  @Field(() => Float, { nullable: true })
  due_date?: number

  @Field({ nullable: true })
  priority?: string

  @Field({ nullable: true })
  status?: string

  @Field(() => Float)
  created_at: number

  @Field(() => Float)
  updated_at: number

  @IsInt()
  @Field(() => Int)
  userId: number
}
