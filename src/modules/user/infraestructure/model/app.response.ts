import { ApiProperty } from "@nestjs/swagger";

export class AppResponse {

    @ApiProperty()
    status: number;

    @ApiProperty()
    message: string;

    @ApiProperty()
    data?: any;
    
}