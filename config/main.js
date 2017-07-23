/** General Configurations Like PORT, HOST names and etc... */

const config = {
  env: process.env.NODE_ENV || 'development',
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8080,
  karmaPort: 9876,

  // This part goes to React-Helmet for Head of our HTML
  app: {
    head: {
      title: '在那儿呢 - 失物招领平台',
      titleTemplate: '%s',
      meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'React Redux Typescript' },
      ]
    }
  },
  backendUrl: 'http://zainaerne.cn',
  apiUrl: 'http://zainaerne.cn/api',
};

export default config;