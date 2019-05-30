'use strict';

module.exports = app => {
    const {mongoose} = app;
    const UserSchema = new mongoose.Schema();
    return mongoose.model('User', UserSchema, 'user');
}