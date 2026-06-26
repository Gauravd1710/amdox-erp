import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateAccountDto } from './dto/crreate-account.dto';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { FinanceService } from './finance.service';

@Controller('finance')
export class FinanceController {
  constructor(private readonly financeService: FinanceService) {}

  @Post('accounts')
  createAccount(@Body() dto: CreateAccountDto) {
    return this.financeService.createAccount(dto);
  }

  @Get('accounts')
  getAccounts() {
    return this.financeService.getAccounts();
  }

  @Post('transactions')
  createTransaction(@Body() dto: CreateTransactionDto) {
    return this.financeService.createTransaction(dto);
  }

  @Get('transactions')
  getTransactions() {
    return this.financeService.getTransactions();
  }
}
