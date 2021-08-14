import { Injectable } from '@nestjs/common';

@Injectable()
export class BankService {
  test(){
    return 'BankService'
  }
}
