import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import { join } from 'path';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1646360371105_1045';

  // add your config here
  config.middleware = [];

  config.midwayFeature = {
    // true 代表使用 midway logger
    // false 或者为空代表使用 egg-logger
    replaceEggLogger: true,
  };

  config.static = {
    prefix: '/',
    dir: join(appInfo.baseDir, 'app/public'),
  };

  // config.security = {
  //   csrf: false,
  // };

  return config;
};
