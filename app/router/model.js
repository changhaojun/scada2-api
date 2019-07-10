'use strict';

const router = app => {
    const {router, controller} = app;
    const filename = 'model';
    const baseurl = app.versioning('/' + filename);
    router.get(baseurl, controller[filename].index);
    router.put(baseurl, controller[filename].update);
    router.post(baseurl, controller[filename].create);
}
module.exports = router;