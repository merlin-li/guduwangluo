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

router.get('/news', async(ctx, next) => {
    let result = await optionService.getNews()
    let homeModel = await optionService.getHomeData()
    let solutionModel = []
    if (result.thumbnails && result.solutionArray) {
        for (let i = 0; i < result.thumbnails.length; i++) {
            solutionModel.push({
                thumbnail: result.thumbnails[i],
                title: result.solutionArray[i].title,
                abstract: result.solutionArray[i].abstract,
                id: result.solutionArray[i]._id
            })
        }
    }

    await ctx.render('newslist', {
        title: '新闻列表',
        solutionModel,
        homeModel
    })
})

module.exports = router