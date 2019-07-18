'use strict';

const Service = require('egg').Service;

class ModelService extends Service {
    async index() {
        const {ctx, app} = this;
        const {Model} = ctx.model; 
        const result = await Model.find();
        return app.standardRes(
            200, 
            'success: get_model', 
            result
        );
    }

    async update(body) {
        const {ctx, app} = this;
        const {Model} = ctx.model; 
        const result = await Model.update({}, body, {multi: true});  //更新的内容(删除字段id): {$unset: {id: 1}}; 更新多条数据: {multi: true}
        if(result.nModified) {
            return app.standardRes(
                200, 
                'success: update_model'
            );
        }else {
            return app.standardRes( 201, 'error: update_model');
        }
        
    }

    async create(body) {
        const {ctx, app} = this;
        const {Model} = ctx.model;
        await Model.create(body);
        return app.standardRes(
            200, 
            'success: create_model'
        );
    }
}
module.exports = ModelService;