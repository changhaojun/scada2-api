// 'use strict';

const Service = require('egg').Service;

class ModelService extends Service {
    async index() {
        const {Model} = this.ctx.model; 
        const result = await Model.find();
        console.log(result);
        return this.app.standardRes(200, 'success: get_model', result);
    }

    async update(body) {
        const {Model} = this.ctx.model; 
        await Model.update({}, body, {multi: true});  //更新的内容(删除字段id): {$unset: {id: 1}}; 更新多条数据: {multi: true}
        return this.app.standardRes(200, 'success: update_model');
    }

    async create(body) {
        const {Model} = this.ctx.model;
        await Model.create(body);
        return this.app.standardRes(200, 'success: create_model');
    }
}
module.exports = ModelService;