import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TasksModule } from './tasks/tasks.module'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql.freedb.tech',
      port: 3306,
      username: 'freedb_demo123',
      database: 'freedb_dbtest123123',
      password: 'Rq4425n!4eVE*Vb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    TasksModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
