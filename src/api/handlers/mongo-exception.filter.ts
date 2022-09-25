import { ArgumentsHost, Catch, ConflictException, ExceptionFilter } from '@nestjs/common';
import { MongoError } from 'mongodb';
import { ForbiddenException } from './exception/forbidden.exception';
import express, { Request, Response } from 'express';

@Catch(MongoError)
export class MongoExceptionFilter implements ExceptionFilter {
    catch(exception: MongoError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = 500;

        switch (exception.code) {
            case 11000:
                response
                    .status(status)
                    .json({
                        statusCode: status,
                        timestamp: new Date().toISOString(),
                        path: request.url,
                        message: 'A chave ${username} já existe no banco de dados.'
                    }).send();
            default:
                response
                    .status(status)
                    .json({
                        statusCode: status,
                        timestamp: new Date().toISOString(),
                        path: request.url,
                    });

        }
    }
}