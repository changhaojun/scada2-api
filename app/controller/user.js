'use strict';

const Controller = require('egg').Controller;
const filename = 'user';

class UserController extends Controller {
    async login() {
        const {ctx} = this;
        const {body} = ctx.request; 
        const result = await ctx.service[filename].login(body);
        ctx.body = result;
    }
}

module.exports = UserController;