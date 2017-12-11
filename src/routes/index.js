const router = require('koa-router')()
const optionService = require('../services/category')

router.get('/', async(ctx, next) => {
    let homeData = await optionService.getHomeData()
    let homeCategories = await optionService.getHomeCategories()

    await ctx.render('index', {
        homeModel: homeData[0],
        homeCategories
    });
})
module.exports = router