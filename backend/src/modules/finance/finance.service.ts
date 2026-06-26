import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateAccountDto } from './dto/crreate-account.dto';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class FinanceService {
  constructor(private prisma: PrismaService) {}

  createAccount(dto: CreateAccountDto) {
    return this.prisma.account.create({
      data: dto,
    });
  }

  getAccounts() {
    return this.prisma.account.findMany({
      include: {
        tenant: true,
        transactions: true,
      },
    });
  }

  createTransaction(dto: CreateTransactionDto) {
    return this.prisma.$transaction(async (prisma) => {
      const transaction = await prisma.transaction.create({
        data: dto,
      });

      const account = await prisma.account.findUniqueOrThrow({
        where: {
          id: dto.accountId,
        },
      });

      let balance = account.balance;

      if (dto.type === 'INCOME') {
        balance += dto.amount;
      } else if (dto.type === 'EXPENSE') {
        balance -= dto.amount;
      } else {
        throw new BadRequestException('Transaction type must be INCOME or EXPENSE');
      }

      await prisma.account.update({
        where: {
          id: dto.accountId,
        },
        data: {
          balance,
        },
      });

      return transaction;
    });
  }

  getTransactions() {
    return this.prisma.transaction.findMany({
      include: {
        account: true,
      },
    });
  }
}
