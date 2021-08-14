import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { BankService } from '../services/bank.service';

@Controller('bank')
export class BankController {
    constructor(private readonly bankService: BankService) {}

  @Get()
  getTest(@Res() res) {
    const data = this.bankService.test()
    return res.status(HttpStatus.OK).json({ data });
  }
}
