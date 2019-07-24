'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    require('./router/template')(app);
    require('./router/scada')(app);
    require('./router/model')(app);
    require('./router/user')(app);
}
