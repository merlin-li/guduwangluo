// 建站套餐
const router = require('koa-router')()

router.get('/sitepackage', async(ctx, next) => {
    await ctx.render('sitepackage', {
        title: '建站套餐'
    });
})

module.exports = router