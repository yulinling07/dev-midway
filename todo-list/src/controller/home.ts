import { Controller, Get, Provide, Inject } from '@midwayjs/decorator';
import { Context } from 'egg';
import { TodolistService } from '../service/fileDB';
import { RenderService } from '../service/render';
@Provide()
@Controller('/')
export class HomeController {
  @Inject()
  ctx: Context;

  @Inject()
  todolistService: TodolistService;

  @Inject()
  renderService: RenderService;

  @Get('/')
  async home() {
    this.ctx.type = 'html';
    const todoList = await this.todolistService.list();
    const html = await this.renderService.render({
      list: todoList,
    });
    return html;
  }
}
