import { Repository } from 'src/constants/repository';
import { Bank } from './entities/bank.entity';

export const BankProvider = [
  {
    provide: Repository.BankRepository,
    useValue: Bank,
  },
];
