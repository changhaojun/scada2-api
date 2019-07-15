'use strict';

const Controller = require('egg').Controller;
const filename = 'model';

class ModelController extends Controller {
    async index() {
        const {ctx} = this;
        const result = await ctx.service[filename].index();
        ctx.body = result;
    }

    async update() {
        const {ctx} = this;
        const {body} = ctx.request;
        const result = await ctx.service[filename].update(body);
        ctx.body = result;
    }

    async create() {
        const {ctx} = this;
        const {body} = ctx.request;
        const result = await ctx.service[filename].create(body);
        ctx.body = result;
    }
}
module.exports = ModelController;