import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { CustomerService } from '../services/customer.service';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) {}

  @Get()
  getTest(@Res() res) {
    const data = this.customerService.test()
    return res.status(HttpStatus.OK).json({ data });
  }
}
