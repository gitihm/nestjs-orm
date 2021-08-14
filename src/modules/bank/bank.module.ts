import { Module } from '@nestjs/common';
import { BankController } from './controllers/bank.controller';
import { BankService } from './services/bank.service';

@Module({
  imports: [],
  controllers: [BankController],
  providers: [BankService],
  exports:[BankService]
})
export class BankModule {}
