// 行业资讯
const router = require('koa-router')()
const optionService = require('../services/goodService')

router.get('/news/:id', async(ctx, next) => {
    let newsId = ctx.params.id
    let homeModel = await optionService.getHomeData()

    await ctx.render('news', {
        title: '行业资讯',
        newsModel: await optionService.getContentById(newsId),
        homeModel
    });
})

module.exports = router