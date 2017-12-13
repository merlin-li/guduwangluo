// app定制
const router = require('koa-router')()
const categoryService = require('../services/goodService')

router.get('/appcustom', async(ctx, next) => {
    await ctx.render('appCustomized', {
        title: '定制，是一种态度！',
        homeModel: await categoryService.getHomeData()
    });
})

module.exports = router