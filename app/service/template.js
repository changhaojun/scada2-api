'use strict';

const Service = require('egg').Service;
const mongoose = require('mongoose');
const moment = require('moment');

class TemplateService extends Service {
    async index(opt) {
        const {ctx} = this;
        const {Template} = ctx.model;
        const {app_id: appId, page_size, page_number} = opt;
        const pageSize = Number(page_size);
        const pageNumber = Number(page_number) - 1;
        const count = await Template.count({app_id: appId});
        const result = await Template.find({app_id: appId, available: 1}).limit(pageSize).skip(pageSize*pageNumber).select('scada_name scada_id'); 
        return {
            code: 200,
            message: 'success: get_template',
            result: {
                total: count,
                rows: result
            }
        }
    }

    async templateData(scadaId) {
        const {ctx, app} = this;
        const {Template} = ctx.model;
        const result = await Template.findOne({scada_id: scadaId});
        return app.standardRes(
            200, 
            'success: get_template', 
            result
        );
    }

    async create(body) {
        const {ctx, app} = this;
        const {Template} = ctx.model;
        const data = Object.assign(body, {
            scada_id: mongoose.Types.ObjectId(),
            scada_name: "",
            scada_describe: '',
            buildings: [],
            models: [],
            camera_target: [0, 0, 0],
            camera_alpha: -1.57,
            camera_beta: 1.05,
            camera_radius: 80,
            available: 1,
            create_time: moment(),
            update_time: moment()
        });
        const result = await Template.create(data);
        return app.standardRes(
            200, 
            'success: create_template', 
            {
                scada_id: result.scada_id
            }
        );
    }

    async update(scadaId, body) {
        const {ctx, app} = this;
        const {Template} = ctx.model;
        const data = app.addUpdateTime(body);
        const result = await Template.update({scada_id: scadaId}, data);
        if(result.nModified) {
            return app.standardRes(
                200, 
                'success: update_template'
            );
        }else {
            return app.standardRes(201,'error: update_template');
        } 
    }

    async remove(scadaId) {
        const {ctx, app} = this;
        const {Template} = ctx.model;
        const result = await Template.remove({scada_id: scadaId});
        if(result.deletedCount) {
            return app.standardRes(
                200, 
                'success: delete_template'
            );
        }else {
            return app.standardRes(201, 'error: delete_template');
        }
    }

    async copyTemplate(body) {
        const {ctx, app} = this;
        const {Template} = ctx.model;

        const res = await Template.findOne(body, {_id: 0});
        const data = Object.assign(res, {
            scada_id: mongoose.Types.ObjectId(),
            scada_name: '',
            create_time: moment(),
            update_time: moment()
        })
        const result = await Template.create(JSON.parse(JSON.stringify(data)));
        return app.standardRes(
            200, 
            'success: copy_template',
            {
                scada_id: result.scada_id
            }
        );
    }
}
module.exports = TemplateService;