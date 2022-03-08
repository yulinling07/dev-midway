import { Inject, Provide } from '@midwayjs/decorator';
import { fileDBService } from './fileDB';

@Provide()
export class UserService {
  @Inject()
  fileDBService: fileDBService;

  async register(username: string, password: string) {
    return await this.fileDBService.add(username, password);
  }

  async login(username: string, password: string) {
    const user = await this.fileDBService.findByUsername(username);
    if (user.password === password) {
      return true;
    }
    return false;
  }
}
