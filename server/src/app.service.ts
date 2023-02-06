import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getNonce(): { nonce: string } {
    return {
      nonce: (global as any).nonce,
    };
  }
}
