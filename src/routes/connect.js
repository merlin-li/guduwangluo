// 联系我们
const router = require('koa-router')()
const categoryService = require('../services/goodService')

router.get('/connect', async(ctx, next) => {
    let contactModel = await categoryService.getContcat()
    let homeModel = await categoryService.getHomeData()
    
    await ctx.render('connect', {
        contactModel,
        homeModel
    });
})

module.exports = router