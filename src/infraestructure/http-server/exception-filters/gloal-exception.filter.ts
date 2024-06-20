import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus, Logger } from "@nestjs/common";
import { Request, Response } from 'express';
import { ApplicationException } from "src/modules/user/shared/exception/application.exception";

@Catch(ApplicationException)
export class GlobalExcpetionFilter implements ExceptionFilter {

    catch(exception: ApplicationException, host: ArgumentsHost) {
        
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>()

        Logger.error(`NorthWind API (${request.method}) at {${request.path}} error: ${exception.message}`)

        response
            .status(HttpStatus.BAD_REQUEST)
            .json({
                status: HttpStatus.BAD_REQUEST,
                message: exception.message
            });

    }
    
}