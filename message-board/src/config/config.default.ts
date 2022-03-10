import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1646726981562_8022';

  // add your config here
  config.middleware = [];

  config.midwayFeature = {
    // true 代表使用 midway logger
    // false 或者为空代表使用 egg-logger
    replaceEggLogger: true,
  };

  config.security = {
    csrf: false,
  };

  /**
   * 单数据库实例
   */
  config.orm = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'yulinling',
    password: 'yu111111',
    database: 'message_board', //数据库名字
    synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true
    logging: true, //是否打印
  };

  return config;
};
