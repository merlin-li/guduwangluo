// 关于我们
const router = require('koa-router')()
const categoryService = require('../services/goodService')

router.get('/about', async(ctx, next) => {
    let aboutModel = await categoryService.getAboutUs()

    await ctx.render('about', {
        aboutModel,
        homeModel: await categoryService.getHomeData()
    });
})

router.get('/payment', async(ctx, next) => {
    await ctx.render('payment', {
        homeModel: await categoryService.getHomeData()
    });
})

module.exports = router