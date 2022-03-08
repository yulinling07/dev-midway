import { Controller, Get, Provide, Inject } from '@midwayjs/decorator';
import { Context } from 'egg';
import { RenderService } from '../service/render';

@Provide()
@Controller('/')
export class HomeController {
  @Inject()
  ctx: Context;

  @Inject()
  renderService: RenderService;

  @Get('/')
  async home() {
    this.ctx.type = 'html';
    const text = this.ctx.cookies.get('my_session_data');
    let cookies = null;
    if (text) {
      cookies = JSON.parse(text);
    }
    const html = await this.renderService.render('home', { cookies });
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
