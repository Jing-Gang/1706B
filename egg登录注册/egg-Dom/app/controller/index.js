const Controller = require('egg').Controller

class IndexController extends Controller{
    async init(ctx,next){
        ctx.body='hellow egg'
    }
    aa(ctx,next){
        ctx.body='123'
    }
}

module.exports = IndexController