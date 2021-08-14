import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { BankModule } from './modules/bank/bank.module';
import { CustomerModule } from './modules/customer/customer.module';
import { ProjectModule } from './modules/project/project.module';

@Module({
  imports: [DatabaseModule, CustomerModule, ProjectModule, BankModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
