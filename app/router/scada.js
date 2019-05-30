'use strict';

const router = app => {
    const {router, controller} = app;
    const filename = 'scada';
    const baseurl = app.versioning('/' + filename);
    router.get(baseurl, controller[filename].index);
    router.get(baseurl + '/:scadaId', controller[filename].scadaData);
    router.post(baseurl, controller[filename].create);
    router.put(baseurl + '/:scadaId', controller[filename].update);
    router.delete(baseurl + '/:scadaId', controller[filename].remove);
}
module.exports = router;