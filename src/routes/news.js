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
    let result = await optionService.getNews(true)
    let homeModel = await optionService.getHomeData()

    let goodNewsArray = []
    let goodNewsObj = await optionService.getNews(true)
    if (goodNewsObj.newsArray && goodNewsObj.thumbnails) {
        for (let i = 0; i < goodNewsObj.newsArray.length; i++) {
            goodNewsArray.push({
                thumbnail: goodNewsObj.thumbnails[i],
                title: goodNewsObj.newsArray[i].title,
                abstract: goodNewsObj.newsArray[i].abstract,
                id: goodNewsObj.newsArray[i]._id
            })
        }
    }

    await ctx.render('newslist', {
        title: '新闻列表',
        goodNewsArray,
        homeModel
    })
})

module.exports = router