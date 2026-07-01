import {
  IsInt,
  IsNumber,
  IsString,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreatePayrollDto {

  @ApiProperty()
  @IsInt()
  month!: number;

  @ApiProperty()
  @IsInt()
  year!: number;

  @ApiProperty()
  @IsNumber()
  basicSalary!: number;

  @ApiProperty()
  @IsNumber()
  bonus!: number;

  @ApiProperty()
  @IsNumber()
  deductions!: number;

  @ApiProperty()
  @IsString()
  employeeId!: string;
}