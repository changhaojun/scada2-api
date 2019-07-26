'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async login(body) {
        const {User} = this.ctx.model;
        const {username, password} = body;
        let data = await User.findOne({username, password}, {password: 0});
        if(data === null) {
            return this.app.standardRes(201, 'username or password error');
        }
        data = JSON.parse(JSON.stringify(data));
        const {_id: app_id, nickname} = data;
        const result = {app_id, username, nickname}
        return this.app.standardRes(
            200, 
            'success: login', 
            result
        );
    }
}

module.exports = UserService;