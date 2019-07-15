'use strict';

module.exports = app => {
    const {mongoose} = app;
    const {Schema} = mongoose;
    const TemplateSchema = new Schema({
        scada_id: {type: Schema.Types.ObjectId},
        app_id: {type: String},
        scada_name: {type: String},
        scada_describe: {type: String},
        camera_alpha: {type: Number},
        camera_beta: {type: Number},
        camera_radius: {type: Number},
        camera_target: {type: Array},
        buildings: {type: Array},
        models: {type: Array},
        create_time: {type: Date},
        update_time: {type: Date},
        available: {type: Number}
    });
    return mongoose.model('Template', TemplateSchema, 'sc_template_c');
}