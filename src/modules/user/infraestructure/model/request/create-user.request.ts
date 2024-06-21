import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, IsStrongPassword, MinLength } from "class-validator";
import { CreateUserDto } from "src/modules/user/shared/dto/create-user.dto";


export class CreateUserRequest implements CreateUserDto {

    @ApiProperty({
        description: 'A real name for a user: <First Name> <Last Name>',
        nullable: false,
        minLength: 3
    })
    @IsString()
    @MinLength(3)
    name: string;

    @ApiProperty({
        description: 'A "nickname" for user',
        nullable: false
    })
    @IsString()
    @MinLength(3)
    username: string;

    @ApiProperty({
        description: 'An email valid string',
        nullable: false
    })
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty({
        description: 'A valid password string that meets the rules',
        nullable: false
    })
    @IsString()
    @IsStrongPassword({
        minLength: 10,
        minLowercase: 1,
        minUppercase: 1,
        minSymbols: 1,
        minNumbers: 1
    })
    password: string;
}