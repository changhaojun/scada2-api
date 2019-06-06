'use strict';

const router = app => {
    const {router, controller} = app;
    const filename = 'scada';
    const baseurl = app.versioning('/' + filename);
    router.get(baseurl + '/:scadaId', controller[filename].index);
    router.post(baseurl, controller[filename].create);
    router.put(baseurl + '/:scadaId', controller[filename].update);
}
module.exports = router;