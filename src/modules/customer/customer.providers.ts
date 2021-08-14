import { Repository } from 'src/constants/repository';
import { Customer } from './entities/customer.entity';

export const CustomerProvider = [
  {
    provide: Repository.CustomerRepository,
    useValue: Customer,
  },
];
