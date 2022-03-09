import { Provide, Inject } from '@midwayjs/decorator';
import { MessageDao } from '../dao/message';
import { UserDao } from '../dao/user';

@Provide()
export class MessageService {
  @Inject()
  messageDao: MessageDao;

  @Inject()
  userDao: UserDao;

  //获取留言列表
  async list() {
    return await this.messageDao.list();
  }

  //发送留言
  async add(username: string, text: string) {
    return await this.messageDao.add(username, text);
  }

  async update(username: string, text: string) {
    const user = await this.userDao.findByUsername(username);
    return this.messageDao.updateById(user.id, text);
  }

  async deleteById(id: number) {
    return this.messageDao.deleteById(id);
  }
}
