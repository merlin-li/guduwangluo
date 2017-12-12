const router = require('koa-router')()
const optionService = require('../services/goodService')

router.get('/', async(ctx, next) => {
    let homeData = await optionService.getHomeData()
    let homeCategories = await optionService.getHomeCategories()
    let homeDataObj = await optionService.getHomeContents()
    let homeRenderArray = []

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

    await ctx.render('index', {
        homeModel: homeData[0],
        homeCategories,
        homeRenderArray
    });
})
module.exports = router