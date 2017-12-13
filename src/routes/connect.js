// 联系我们
const router = require('koa-router')()
const marked = require('marked')
const categoryService = require('../services/goodService')

router.get('/connect', async(ctx, next) => {
    let contactModel = await categoryService.getContcat()
    let homeModel = await categoryService.getHomeData()
    
    contactModel.mixed.pageContent = marked(contactModel.mixed.pageContent.toString())
    
    await ctx.render('connect', {
        contactModel,
        homeModel
    });
})

module.exports = router