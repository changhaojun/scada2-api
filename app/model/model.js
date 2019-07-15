'use strict';

module.exports = app => {
    const {mongoose} = app;
    const {Schema} = mongoose;
    const ModelSchema = new Schema({
        name_en: {type: String},
        name_cn: {type: String},
        model_system: {type: Number}
    });
    return mongoose.model('Model', ModelSchema, 'model_c');
}