// 建站套餐
const router = require('koa-router')()
const optionService = require('../services/goodService')

router.get('/sitepackage', async(ctx, next) => {
    let homeModel = await optionService.getHomeData()

    await ctx.render('sitepackage', {
        title: '建站套餐',
        homeModel
    });
})

module.exports = router