import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'src/constants/repository';
import { Customer } from '../entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @Inject(Repository.CustomerRepository)
    private readonly customer: typeof Customer,
  ) {}

  async create(data) {
    return this.customer.create(data);
  }

  async findAll(options = {}) {
    return this.customer.findAll(options);
  }

  async findOne(options = {}) {
    return this.customer.findOne(options);
  }

  async delete(customerID: number) {
    return this.customer.destroy({ where: { customerID } });
  }

  async update(customerID: number, data) {
    return this.customer.update(data, { where: { customerID } });
  }
}
