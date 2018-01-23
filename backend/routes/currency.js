const router = require('koa-router')();
const db     = require('../db');

const BASE = '/currency';

router.get(`${BASE}/:id`, async (ctx) => {
    console.log(`GET ${BASE}/${ctx.params.id}`);
});


module.exports = router.middleware();