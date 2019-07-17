'use strict';

const Service = require('egg').Service;
const mongoose = require('mongoose');
const moment = require('moment');

class ScadaService extends Service {
    async index(scadaId) {
        const {ctx, app} = this;
        const {Scada} = ctx.model; 
        const result = await Scada.findOne({scada_id: scadaId});
        return app.standardRes(
            200, 
            'success: get_scada', 
            result
        );
    }

    async create(body) {
        const {ctx, app} = this;
        const {Scada} = ctx.model; 
        const data = Object.assign(body, {
            scada_id: mongoose.Types.ObjectId(),
            create_time: moment(),
            update_time: moment()
        });
        const result = await Scada.create(data);
        return app.standardRes(
            200, 
            'success: create_scada', 
            {
                scada_id: result.scada_id
            }
        );
    }

    async update(scadaId, body) {
        const {ctx, app} = this;
        const {Scada} = ctx.model;
        const data = app.addUpdateTime(body);
        await Scada.update({scada_id: scadaId}, data);
        return app.standardRes(
            200, 
            'success: update_scada'
        );
    }
}
module.exports = ScadaService;