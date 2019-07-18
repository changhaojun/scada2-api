'use strict';

module.exports = app => {
    const {mongoose} = app;
    const {Schema} = mongoose;
    const GroupSchema = new Schema({
        group_id: {type: Number},
        group_name: {type: String}
    });
    return mongoose.model('Group', GroupSchema, 'group_c');
}