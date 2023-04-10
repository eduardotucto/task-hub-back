import { InputType, Field, Float } from '@nestjs/graphql'

@InputType()
export class CreateUserInput {
  @Field()
  name: string

  @Field()
  email: string

  @Field()
  password: string

  @Field(() => Float, { nullable: true })
  created_at?: number
}
