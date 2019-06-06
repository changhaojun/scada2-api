'use strict';

const Service = require('egg').Service;
const mongoose = require('mongoose');
const moment = require('moment');

class ScadaService extends Service {
    async index(scadaId) {
        const {Scada} = this.ctx.model; 
        const result = await Scada.findOne({scada_id: scadaId})
        return this.app.standardRes(200, 'success: get_scada', result);
    }

    async create(body) {
        const {Scada} = this.ctx.model; 
        const res = Object.assign(body, {
            scada_id: mongoose.Types.ObjectId(),
            create_time: moment()
        });
        await Scada.create(res);
        return this.app.standardRes(200, 'success: create_scada', {scada_id: res.scada_id});
    }

    async update(scadaId, body) {
        const {Scada} = this.ctx.model; 
        body.update_time = moment();
        await Scada.update({scada_id: scadaId}, body);
        return this.app.standardRes(200, 'success: update_scada');
    }
}
module.exports = ScadaService;