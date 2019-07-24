'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async login(body) {
        const {User} = this.ctx.model;
        const {username, password} = body;
        let result = await User.findOne({username, password}, {password: 0});
        if(result === null) {
            return this.app.standardRes(201, 'username or password error');
        }
        result = JSON.parse(JSON.stringify(result));
        Object.assign(result, {app_id: result._id});
        delete result['_id']
        return this.app.standardRes(
            200, 
            'success: login', 
            result
        );
    }
}

module.exports = UserService;