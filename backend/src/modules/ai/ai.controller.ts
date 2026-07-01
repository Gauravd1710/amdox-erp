import { Controller, Get, Res } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import type { Response } from 'express';
import { AiService } from './ai.service';

@ApiTags('ai')
@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Get('forecast')
  @ApiOkResponse({
    description: 'Returns the AI forecast from the FastAPI ML service.',
    schema: {
      example: {
        forecast: [68000, 69000, 70500, 72000],
      },
    },
  })
  async getForecast(@Res() res: Response) {
    const forecast = await this.aiService.getForecast();

    return res.json(forecast);
  }
}
