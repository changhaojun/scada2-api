'use strict';

const router = app => {
    const {router, controller} = app;
    const filename = 'user';
    const baseurl = app.versioning('/login');
    
    router.post(baseurl, controller[filename].login);
}

module.exports = router;