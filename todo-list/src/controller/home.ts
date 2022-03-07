import { Controller, Get, Provide, Inject } from '@midwayjs/decorator';
import { Context } from 'egg';
import { todoList } from './api';

@Provide()
@Controller('/')
export class HomeController {
  @Inject()
  ctx: Context;

  @Get('/')
  async home() {
    this.ctx.type = 'html';

    return `
    动态渲染
    <form action="/api/todo" method="post">
      <input name="text">
      <button>确定</button>
    </form>

    <ul>${todoList.map(item => '<li>' + item + '</li>').join('')}</ul>
    `;
  }
}
