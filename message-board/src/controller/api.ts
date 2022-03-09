import { Inject, Controller, Post, Provide } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from '../model/service/user';

@Provide()
@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Post('/')
  async home() {
    return 'Hello Midwayjs!';
  }
}
