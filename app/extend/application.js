'use strict';

const moment = require('moment');

const extend = {
    versioning(path) {
        if(path[0] !== '/') {
            throw new Error('API path must satrtWith /');
        };
        const version = '/v' + this.config.pkg.version.split('.')[0];
        return version + path;
    },
    standardRes(code = 200, message = '', result = {}) {
        if (result instanceof Array) {
            const total = result.length;
            result = {
                total,
                rows: result,
            };
        }
        return { code, message, result };
    },
    addUpdateTime(origin) {
        return Object.assign(origin, {
            update_time: moment()
        })
    }
}
module.exports = extend;