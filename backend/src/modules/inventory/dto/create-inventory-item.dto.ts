import {
  IsString,
  IsInt,
  IsNumber,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateInventoryItemDto {

  @ApiProperty()
  @IsString()
  name!: string;

  @ApiProperty()
  @IsString()
  sku!: string;

  @ApiProperty()
  @IsString()
  category!: string;

  @ApiProperty()
  @IsInt()
  quantity!: number;

  @ApiProperty()
  @IsNumber()
  unitPrice!: number;

  @ApiProperty()
  @IsString()
  tenantId!: string;
}