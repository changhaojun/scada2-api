'use strict';

const moment = require('moment');

module.exports = () => {
    return async function(ctx, next) {
        let actk = "";
        if(ctx.request.method === "GET") {
            actk = ctx.query.actk;
        }else {
            actk = ctx.request.body.actk;
        }
        console.log('actk:', actk) 
        
        // 判断token是否存在
        if(actk === undefined) {
            ctx.body = {
                code: 403,
                message: '令牌不合法'
            }
            return;
        }else {
            // 判断token是否过期
            const currentTime = moment().valueOf();
            const {Token} = ctx.model;
            const data = await Token.find({actk: actk, expires_time: {$gt: currentTime}});
            if(data.length === 0) {
                ctx.body = {
                    code: 405,
                    message: 'token已过期，请重新登录'
                }
                return;
            }
        }
        await next();
    }
}