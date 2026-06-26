import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePayrollDto } from './dto/create-payroll.dto';

@Injectable()
export class PayrollService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreatePayrollDto) {
    const netSalary =
      dto.basicSalary +
      dto.bonus -
      dto.deductions;

    return this.prisma.payroll.create({
      data: {
        month: dto.month,
        year: dto.year,
        basicSalary: dto.basicSalary,
        bonus: dto.bonus,
        deductions: dto.deductions,
        netSalary,
        employeeId: dto.employeeId,
      },
      include: {
        employee: true,
      },
    });
  }

  findAll() {
    return this.prisma.payroll.findMany({
      include: {
        employee: true,
      },
    });
  }
}