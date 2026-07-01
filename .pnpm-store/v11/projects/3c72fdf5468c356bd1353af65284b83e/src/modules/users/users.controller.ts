import {
  Controller,
  Get,
  UseGuards,
} from '@nestjs/common';

import { Roles } from '../../common/decorators/roles.decorator';
import { RolesGuard } from '../../common/guards/roles.guard';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {

  @Get('admin')
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard,RolesGuard)
  adminOnly() {
    return {
      message: 'Admin Access Granted',
    };
  }
}