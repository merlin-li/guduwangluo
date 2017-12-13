const router = require('koa-router')()
const optionService = require('../services/goodService')

router.get('/', async(ctx, next) => {
    let homeModel = await optionService.getHomeData()
    let homeCategories = await optionService.getHomeCategories()
    let goodNewsObj = await optionService.getNews()
    let goodNewsArray = []
    let categoryIDs = []

    for (let i = 0; i < homeCategories.length; i++) {
        categoryIDs.push(homeCategories[i]._id)
    }

    let homeProducts = await optionService.getHomeProducts(categoryIDs)

    console.log(homeProducts)

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
        homeProducts,
        goodNewsArray
    });
})
module.exports = router