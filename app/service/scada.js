'use strict';

const Service = require('egg').Service;
const mongoose = require('mongoose');
const moment = require('moment');

class ScadaService extends Service {
    async index(opt) {
        const {Scada} = this.ctx.model;
        const pageSize = Number(opt.page_size);
        const pageNumber = Number(opt.page_number) - 1;
        const result = await Scada.find({app_id: opt.app_id}).limit(pageSize).skip(pageSize*pageNumber).select('scada_name scada_id');
        return this.app.standardRes(200, 'success: get_scene', result);
    }

    async ScadaData(scadaId) {
        const {Scada} = this.ctx.model;
        let result = await Scada.findOne({scada_id: scadaId});
        return this.app.standardRes(200, 'success: get_scada', result);
    }

    async create(body) {
        const {Scada} = this.ctx.model;
        body.scada_id = mongoose.Types.ObjectId();
        body.scada_name = "";
        body.create_time = moment().add(8, 'hours').format('YYYY-MM-DD HH:mm:ss');
        body.update_time = "";
        body.visible = 1;
        await Scada.create(body);
        return this.app.standardRes(200, 'success: create_scada', {scada_id: body.scada_id});
    }

    async update(scadaId, body) {
        const {Scada} = this.ctx.model;
        body.update_time = moment().add(8, 'hours').format('YYYY-MM-DD HH:mm:ss');
        await Scada.update({scada_id: scadaId}, body);
        return this.app.standardRes(200, 'success: update_scada');
    }

    async remove(scadaId) {
        const {Scada} = this.ctx.model;
        await Scada.remove({scada_id: scadaId});
        return this.app.standardRes(200, 'success: delete_scene');
    }
}
module.exports = ScadaService;

const datas = {
    "app_id": "5ce503534a560c0c186e2b05",
    "scene_name": "组态",
	"camera_alpha": 10,
	"camera_beta": 5,
	"camera_radius": 8,
	"camera_target": [1, 2, 5],
    "buildings": [
        {
            "building_name": "这边呢",
            "floor_count": 3,
            "unit_number": 2,
            "position": [10, 20, 50],
            "rotation": [2, 5, 9],
            "floors": [
                {
                    "rooms": [
                        {
                            "user_number": "1001",
                            "size": [100, 25, 49],
                            "offset": [25, 36, 14]
                        },
                        {
                            "user_number": "1002",
                            "size": [14, 35, 27],
                            "offset": [145, 25, 23]
                        },
                        {
                            "user_number": "1003",
                            "size": [10, 37, 32],
                            "offset": [24, 57, 24]
                        }
                    ],
                    "size": [41, 28, 86]
                },
                {
                    "rooms": [
                        {
                            "user_number": "1201",
                            "size": [42, 74, 14],
                            "offset": [42, 72, 42]
                        },
                        {
                            "user_number": "1202",
                            "size": [42, 77, 25],
                            "offset": [56, 45, 26]
                        },
                        {
                            "user_number": "1203",
                            "size": [78, 54, 31],
                            "offset": [46, 86, 26]
                        }
                    ],
                    "size": [45, 45, 11]
                }
            ]
        },
        {
            "building_name": "时尚感和",
            "floor_count": 5,
            "unit_number": 3,
            "position": [42, 55, 75],
            "rotation": [42, 258, 39],
            "floors": [
                {
                    "rooms": [
                        {
                            "user_number": "801",
                            "size": [53, 8, 58],
                            "offset": [53, 35, 75]
                        },
                        {
                            "user_number": "802",
                            "size": [45, 78, 42],
                            "offset": [45, 63, 789]
                        },
                        {
                            "user_number": "803",
                            "size": [78, 25, 76],
                            "offset": [72, 86, 25]
                        }
                    ],
                    "size": [52, 56, 66]
                },
                {
                    "rooms": [
                        {
                            "user_number": "9010",
                            "size": [47, 25, 6],
                            "offset": [32, 42, 15]
                        },
                        {
                            "user_number": "902",
                            "size": [23, 35, 45],
                            "offset": [45, 24, 53]
                        },
                        {
                            "user_number": "903",
                            "size": [45, 5, 68],
                            "offset": [42, 33, 53]
                        }
                    ],
                    "size": [53, 65, 53]
                }
            ]
        }
    ],
    "models": [
        {
            "name_en": "add__arrow_red",
            "name_cn": "箭头-红",
            "scaling": [0.2301000861033259, 0.1, 0.1],
            "position": [0, 17.72244986481005, 0],
            "rotation": [-1.7449833416124745, 0, 0],
            "rotationQuaternion": [-0.7659332582082387, 0, 0, 0.6429200914347853],
            "size": [96.07220000000001, 46.8464, 7.77826]
        },
        {
            "name_en": "add__arrow_red-1",
            "name_cn": "箭头-红-1",
            "scaling": [0.1, 0.1, 0.1],
            "position": [0, 5.942251663478409, -21.476855223888137],
            "rotation": [-0, 0, -0],
            "rotationQuaternion": [0, 0, 0, 1],
            "size": [96.07220000000001, 46.8464, 7.77826]
        }
    ]
}
