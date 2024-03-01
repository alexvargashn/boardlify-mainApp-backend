import { IsDateString, IsEnum, IsString, MinLength } from "class-validator";

enum Genre {
    Masculine = "M",
    Femenine = "F",
    Other = "O"
}

export class CreatePersonDto {

    @IsString()
    @MinLength(1)
    firstName: string;

    @IsString()
    @MinLength(1)
    lastName: string;

    @IsEnum(Genre)
    genre: Genre;

    @IsDateString()
    birthDate: string;

}
