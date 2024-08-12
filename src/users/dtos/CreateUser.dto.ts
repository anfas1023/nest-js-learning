import { IsEmail, IsInt, IsNotEmpty, isNotEmpty, IsString } from "class-validator"

export class CreateUserDTO {
    @IsNotEmpty()
    @IsString()
    username:string
    
    @IsEmail()
    email: string;
  
   @IsNotEmpty()
    age: number;
}