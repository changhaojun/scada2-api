'use strict';

const Controller = require('egg').Controller;
const filename = 'template';

class TemplateController extends Controller {
    async index() {
        const {ctx} = this;
        const opt = ctx.query;  
        const result = await ctx.service[filename].index(opt);
        ctx.body = result;
    }

    async templateData() {
        const {ctx} = this;
        const {scadaId} = ctx.params; 
        const result = await ctx.service[filename].templateData(scadaId);
        ctx.body = result;
    }

    async create() {
        const {ctx} = this;
        const {body} = ctx.request;
        try{
            if(!JSON.stringify(body).includes('app_id')) throw new Error('The request parameter is not "app_id"');
            const result = await ctx.service[filename].create(body);
            ctx.body = result;
        }catch(err) {
            
        }
    }
    
    async update() {
        const {ctx} = this;
        const {scadaId} = ctx.params;
        const {body} = ctx.request;
        const result = await ctx.service[filename].update(scadaId, body);
        ctx.body = result;
    }

    async remove() {
        const {ctx} = this;
        const {scadaId} = ctx.params; 
        const result = await ctx.service[filename].remove(scadaId);
        ctx.body = result;
    }

    async copyTemplate() {
        const {ctx} = this;
        const {body} = ctx.request;
        try{
            if(!JSON.stringify(body).includes('app_id') || !body['scada_id']) throw new Error('The request parameter are not "app_id" and "scada_id"');   
            const result = await ctx.service[filename].copyTemplate(body);
            ctx.body = result;
        }catch(err) {
            
        }
    }

    async templateUsed() {
        const {ctx} = this;
        const {id} = ctx.params;
        const result = await ctx.service[filename].templateUsed(id);
        ctx.body = result;
    }
}
module.exports = TemplateController;