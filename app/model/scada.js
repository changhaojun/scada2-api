'use strict';

module.exports = app => {
    const {mongoose} = app;
    const {Schema} = mongoose;
    const ScadaSchema = new Schema({
        template_id: {type: Schema.Types.ObjectId},
        scada_id: {type: Schema.Types.ObjectId},
        scada_name: {type: String},
        camera_alpha: {type: Number},
        camera_beta: {type: Number},
        camera_radius: {type: Number},
        camera_target: {type: Array},
        buildings: {type: Array},
        models: {type: Array},
        create_time: {type: Date},
        update_time: {type: Date},
        labels: {type: Array}
    });
    return mongoose.model('Scada', ScadaSchema, 'scada_c');
}