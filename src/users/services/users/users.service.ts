import { Injectable } from '@nestjs/common';
import { CreateUserDeatils } from 'src/users/utils/types';

@Injectable()
export class UsersService {
    private fakeUsers=[{username:'anfas',email:"anfasmuhammed@gmail.com",age:20}]

    fetchUsers(){
        return this.fakeUsers
    }

    createuser(userData:CreateUserDeatils) {
        this.fakeUsers.push(userData)
        return this.fakeUsers
    }
}
