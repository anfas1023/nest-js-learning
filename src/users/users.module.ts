import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersService } from './services/users/users.service';
import { UserController } from './controller/users/users.controller';
import { ExampleMiddleware } from './middleware/example/example.middleware';
import { NewMiddleware } from './middleware/new/new.middleware';

@Module({
  controllers:[UserController],
  providers: [UsersService],

})

// export class UsersModule implements NestModule {
// configure(consumer: MiddlewareConsumer) {
//   consumer.apply(ExampleMiddleware).forRoutes('users')
// }
// }

export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExampleMiddleware).forRoutes({
      path:'users',
      method:RequestMethod.GET
    },
    {
      path:'users/:id/:userId',
      method:RequestMethod.GET
    }
  ).apply(NewMiddleware).forRoutes({
    path:'users',
    method:RequestMethod.GET
  },{
    path:'users/:id/:userId',
    method:RequestMethod.GET
  })
  }
  }



