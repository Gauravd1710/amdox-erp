import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

interface ApiErrorResponse {
  success: false;
  statusCode: number;
  path: string;
  timestamp: string;
  error: {
    message: string | string[];
  };
}

@Catch()
export class ApiExceptionFilter
  implements ExceptionFilter
{
  catch(
    exception: unknown,
    host: ArgumentsHost,
  ) {
    const context = host.switchToHttp();
    const response =
      context.getResponse<Response>();
    const request = context.getRequest<Request>();

    const statusCode =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    response.status(statusCode).json({
      success: false,
      statusCode,
      path: request.url,
      timestamp: new Date().toISOString(),
      error: {
        message:
          this.getMessage(exception),
      },
    } satisfies ApiErrorResponse);
  }

  private getMessage(
    exception: unknown,
  ): string | string[] {
    if (exception instanceof HttpException) {
      const response =
        exception.getResponse();

      if (
        typeof response === 'object' &&
        response !== null &&
        'message' in response
      ) {
        return response.message as
          | string
          | string[];
      }

      if (typeof response === 'string') {
        return response;
      }
    }

    if (exception instanceof Error) {
      return exception.message;
    }

    return 'Internal server error';
  }
}
