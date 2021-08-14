import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectService {
  test(){
    return 'ProjectService'
  }
}
