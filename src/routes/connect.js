// 联系我们
const router = require('koa-router')()

router.get('/connect', async(ctx, next) => {
    await ctx.render('connect', {
        title: '联系我们'
    });
})

module.exports = router