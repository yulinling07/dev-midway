import { renderFile } from 'ejs';
import { join } from 'path';
import { Provide, Scope, ScopeEnum } from '@midwayjs/decorator';

@Scope(ScopeEnum.Singleton)
@Provide()
export class RenderService {
  async render(file: string, locals: any) {
    return renderFile(join(__dirname, `../../app/view/${file}.ejs`), locals);
  }
}
