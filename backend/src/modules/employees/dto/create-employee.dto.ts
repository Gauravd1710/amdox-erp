import {
  IsString,
  IsEmail,
  IsNumber,
  IsOptional,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {

  @ApiProperty()
  @IsString()
  firstName!: string;

  @ApiProperty()
  @IsString()
  lastName!: string;

  @ApiProperty()
  @IsEmail()
  email!: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty()
  @IsString()
  designation!: string;

  @ApiProperty()
  @IsString()
  department!: string;

  @ApiProperty()
  @IsNumber()
  salary!: number;

  @ApiProperty()
  @IsString()
  joiningDate!: string;

  @ApiProperty()
  @IsString()
  tenantId!: string;
}