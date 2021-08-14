import { Module } from '@nestjs/common';
import { CustomerController } from './controllers/customer.controller';
import { CustomerProvider } from './customer.providers';
import { CustomerService } from './services/customer.service';

@Module({
  imports: [],
  controllers: [CustomerController],
  providers: [CustomerService,...CustomerProvider],
  exports:[CustomerService]
})
export class CustomerModule {}
