import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // @Redirect('https://localhost:443/vite-app-demo/', 301)
  @Render('index.hbs')
  root(): { nonce: string } {
    return this.appService.getNonce();
  }
}
