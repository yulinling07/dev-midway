import { Controller, Get, Provide, Inject } from '@midwayjs/decorator';
import { Context } from 'egg';
import { MessageService } from '../model/service/message';
import { RenderService } from '../model/service/render';

@Provide()
@Controller('/')
export class HomeController {
  @Inject()
  ctx: Context;

  @Inject()
  renderService: RenderService;

  @Inject()
  messageService: MessageService;

  @Get('/')
  async home() {
    this.ctx.type = 'html';
    const text = this.ctx.cookies.get('my_session_data');
    let cookies = null;
    if (text) {
      cookies = JSON.parse(text);
    }

    const msgList = await this.messageService.list();
    const html = await this.renderService.render('home', { cookies, msgList });
    return html;
  }

  @Get('/register')
  async register() {
    this.ctx.type = 'html';
    const html = await this.renderService.render('register', {});
    return html;
  }

  @Get('/login')
  async login() {
    this.ctx.type = 'html';
    const html = await this.renderService.render('login', {});
    return html;
  }
}
