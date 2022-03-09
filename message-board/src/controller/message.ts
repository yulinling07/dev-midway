import { Controller, Post, Provide, Inject, Get } from '@midwayjs/decorator';
import { Context } from 'egg';
import { MessageService } from '../model/service/message';

@Provide()
@Controller('/message')
export class MessageController {
  @Inject()
  ctx: Context;

  @Inject()
  messageService: MessageService;

  @Get('/')
  async list(): Promise<any> {
    return this.messageService.list();
  }

  @Post('/')
  async post(): Promise<any> {
    const cookieText = this.ctx.cookies.get('my_session_data');
    let cookies = null;
    if (cookieText) {
      cookies = JSON.parse(cookieText);
    }

    const { text } = this.ctx.request.body;
    if (cookies && text) {
      this.messageService.add(cookies.username, text);
    }
    this.ctx.redirect('/');
    return;
  }
}
