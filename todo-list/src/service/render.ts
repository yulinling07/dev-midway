import { renderFile } from 'ejs';
import { join } from 'path';
import { Provide, Scope, ScopeEnum } from '@midwayjs/decorator';

@Scope(ScopeEnum.Singleton)
@Provide()
export class RenderService {
  async render(locals) {
    const html = await renderFile(
      join(__dirname, '../app/view/home.ejs'),
      locals
    );
    return html;
  }
}
