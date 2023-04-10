import { Field, Float, InputType } from '@nestjs/graphql'

@InputType()
export class CreateTaskInput {
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
}
