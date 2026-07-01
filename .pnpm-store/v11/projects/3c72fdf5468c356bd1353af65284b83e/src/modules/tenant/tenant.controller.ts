import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';

import { TenantService } from './tenant.service';
import { CreateTenantDto } from './dto/create-tenant.dto';

@Controller('tenant')
export class TenantController {
  constructor(
    private tenantService: TenantService,
  ) {}

  @Post()
  create(
    @Body() dto: CreateTenantDto,
  ) {
    return this.tenantService.create(
      dto.name,
    );
  }
}