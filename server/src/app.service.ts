import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getViewName(): { message: string } {
    return { message: new Date().toLocaleTimeString() };
  }
}
