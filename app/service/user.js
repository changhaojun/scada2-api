'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async login(body) {
        const {User} = this.ctx.model;
        const userInfo = {
            username: body.username,
            password: body.password
        }
        let data = await User.findOne(userInfo, {_id: 1, username: 1, nickname: 1});
        const result = JSON.parse(JSON.stringify(data));
        if(result === null) {
            return this.app.standardRes(
                400, 
                '账号或密码错误'
            );
        }
        return this.app.standardRes(
            200, 
            'success: login', 
            result
        );
    }
}

module.exports = UserService;