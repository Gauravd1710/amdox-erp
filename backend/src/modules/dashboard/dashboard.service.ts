import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getSummary() {
    const [
      employeeCount,
      payrollCount,
      accountCount,
      transactionCount,
      inventoryItems,
    ] = await Promise.all([
      this.prisma.employee.count(),
      this.prisma.payroll.count(),
      this.prisma.account.count(),
      this.prisma.transaction.count(),
      this.prisma.inventoryItem.findMany(),
    ]);

    const inventoryCount = inventoryItems.length;

    const inventoryValue = inventoryItems.reduce(
      (total, item) => total + item.quantity * item.unitPrice,
      0,
    );

    return {
      employeeCount,
      payrollCount,
      accountCount,
      transactionCount,
      inventoryCount,
      inventoryValue,
    };
  }
}