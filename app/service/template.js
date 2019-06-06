'use strict';

const Service = require('egg').Service;
const mongoose = require('mongoose');
const moment = require('moment');

class TemplateService extends Service {
    async index(opt) {
        const {Template} = this.ctx.model;
        const pageSize = Number(opt.page_size);
        const pageNumber = Number(opt.page_number) - 1;
        const count = await Template.count({app_id: opt.app_id});
        const result = await Template.find({app_id: opt.app_id, available: 1}).limit(pageSize).skip(pageSize*pageNumber).select('scada_name scada_id');
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
        const {Template} = this.ctx.model;
        let result = await Template.findOne({scada_id: scadaId});
        return this.app.standardRes(200, 'success: get_template', result);
    }

    async create(body) {
        const {Template} = this.ctx.model;
        const res = Object.assign(body, {
            scada_name: "",
            buildings: [],
            models: [],
            camera_target: [0, 0, 0],
            available: 1,
            scada_id: mongoose.Types.ObjectId(),
            create_time: moment()
        })
        await Template.create(res);
        return this.app.standardRes(200, 'success: create_template', {scada_id: res.scada_id});
    }

    async update(scadaId, body) {
        const {Template} = this.ctx.model;
        body.update_time = moment();
        await Template.update({scada_id: scadaId}, body);
        return this.app.standardRes(200, 'success: update_template');
    }

    async remove(scadaId) {
        const {Template} = this.ctx.model;
        await Template.remove({scada_id: scadaId});
        return this.app.standardRes(200, 'success: delete_template');
    }
}
module.exports = TemplateService;