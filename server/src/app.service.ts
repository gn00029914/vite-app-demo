import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getNonce(): { nonce: string } {
    const nonce = Buffer.from(Math.random().toString()).toString('base64');
    return {
      nonce: nonce,
    };
  }
}
