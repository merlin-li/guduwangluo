const router = require('koa-router')()
const optionService = require('../services/goodService')

router.get('/', async(ctx, next) => {
    let homeModel = await optionService.getHomeData()
    let homeCategories = await optionService.getHomeCategories()
    let homeDataObj = await optionService.getHomeContents()
    let goodNewsObj = await optionService.getNews()
    let homeRenderArray = []
    let goodNewsArray = []

    if (homeDataObj.homeContents && homeDataObj.thumbnails) {
        for (let i = 0; i < homeDataObj.homeContents.length; i++) {
            homeRenderArray.push({
                thumbnail: homeDataObj.thumbnails[i],
                title: homeDataObj.homeContents[i].title,
                abstract: homeDataObj.homeContents[i].abstract,
                id: homeDataObj.homeContents[i]._id
            })
        }
    }

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

    await ctx.render('index', {
        homeModel,
        homeCategories,
        homeRenderArray,
        goodNewsArray
    });
})
module.exports = router