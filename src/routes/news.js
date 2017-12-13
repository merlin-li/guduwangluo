// 行业资讯
const router = require('koa-router')()
const marked = require('marked')
const optionService = require('../services/goodService')

router.get('/news/:id', async(ctx, next) => {
    let newsId = ctx.params.id
    let homeModel = await optionService.getHomeData()
    let newsModel = await optionService.getContentById(newsId)

    newsModel.content = marked(newsModel.content.toString())
    await ctx.render('news', {
        title: '行业资讯',
        newsModel,
        homeModel
    });
})

module.exports = router