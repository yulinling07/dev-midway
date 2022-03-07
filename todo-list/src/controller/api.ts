import {
  Inject,
  Controller,
  Post,
  Get,
  Put,
  Del,
  Provide,
} from '@midwayjs/decorator';
import { Context } from 'egg';
import { TodolistService } from '../service/fileDB';

@Provide()
@Controller('/api')
export class APIController {
  @Inject('ctx')
  ctx: Context;

  @Inject('TodolistService')
  db: TodolistService;

  // POST /api/todo
  @Post('/todo')
  async addTodo() {
    const { text } = this.ctx.request.body;
    await this.db.add(text);

    // 跳转到直出的 HTML 页面
    this.ctx.redirect('/');
    return 'ok';
  }

  // GET /api/todo
  @Get('/todo')
  async getTodo() {
    return await this.db.list();
  }

  // DELETE /api/todo
  // curl localhost:6001/apis/todo/1234  -> id: 1234
  @Del('/todo/:id')
  async deleteTodo() {
    const { id } = this.ctx.params;
    await this.db.del(Number(id));
  }

  // PUT /api/todo
  @Put('/todo/:id')
  async putTodo() {
    const { id } = this.ctx.params;
    const { text } = this.ctx.request.body;
    await this.db.update(Number(id), text);
  }
}
