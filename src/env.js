let baseUrl;

// console.log(process.env.NODE_ENV)//默认值是development

switch(process.env.NODE_ENV){
    case 'development':
        baseUrl = 'http://poetry.apiopen.top/sentences';
        break;
    case 'production':
        baseUrl = 'http://poetry.apiopen.top/poetryFull?count=2&page=1';
        break;
      case 'prev':
        baseUrl = 'http://prev-mall-pre.springboot.cn/api';
        break;
      case 'prod':
        baseUrl = 'http://mall-pre.springboot.cn/api';
        break;
      default:
        baseUrl = 'http://mall-pre.springboot.cn/api';
        break;
}
export default {
    baseUrl
}