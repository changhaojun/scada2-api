'use strict';

const Controller = require('egg').Controller;
const filename = 'scada';

class ScadaController extends Controller {
    async index() {
        const {ctx} = this;
        const {scadaId} = ctx.params; 
        const result = await ctx.service[filename].index(scadaId);
        ctx.body = result;
    }

    async create() {
        const {ctx} = this;
        const {body} = ctx.request;
        const result = await ctx.service[filename].create(body);
        ctx.body = result;
    }

    async update() {
        const {ctx} = this;
        const {scadaId} = ctx.params;
        const {body} = ctx.request;
        const result = await ctx.service[filename].update(scadaId, body);
        ctx.body = result;
    }
}
module.exports = ScadaController;