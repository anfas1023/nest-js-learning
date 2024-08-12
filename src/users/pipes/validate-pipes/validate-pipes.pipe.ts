import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class ValidatePipesPipe implements PipeTransform {
  transform(value: CreateUserDTO, metadata: ArgumentMetadata) {
    console.log('inside pipe');
    
    console.log(value);
    console.log(metadata);
    
    
    return value;
  }
}
