import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response, response } from 'express';
import { title } from 'process';
import { CreateUserDTO } from '../../dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';
import { ValidatePipesPipe } from 'src/users/pipes/validate-pipes/validate-pipes.pipe';

@Controller('users')
export class UserController {

    constructor(private userService:UsersService) {}
  @Get()
  getUsers() {
    return this.userService.fetchUsers()
  }

  @Get('posts')
  getUserPosts() {
    return [
      {
        username: 'anfas',
        email: 'dfhgkj',
        posts: [
          {
            id: 1,
            title: 'Posts 1',
          },

          {
            id: 2,
            title: 'Posts 2',
          },
        ],
      },
    ];
  }

  //     @Post('create')
  //     cretePost(@Req() req:Request,@Res() response:Response) {
  // console.log(req.body);
  // response.send('created')

  //     }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createPost(@Body(ValidatePipesPipe) userData: CreateUserDTO) {
   return this.userService.createuser(userData)
  }

  @Get(':id/:userId')
  getUserById(@Param('id',ParseIntPipe) id: string, @Param('userId',ParseIntPipe) userId: string,) {
    console.log(id, userId);
    return { id, userId };
  }

  @Get('/post')
  getPosts(@Query('sortBy') sortBy:string) {
console.log(sortBy);
return {sortBy}

  }
}
