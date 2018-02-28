const router = require('koa-router')()
const marked = require('marked')
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

router.get('/banner/:bannerId', async(ctx, next) => {
    let homeModel = await optionService.getHomeData()
    let aboutModel = await optionService.getBannerData(ctx.params.bannerId)
    // let aboutModel = await optionService.getAboutUs(ctx.params.bannerId)

    aboutModel.mixed.pageContent = marked(aboutModel.mixed.pageContent.toString())
    await ctx.render('banner', {
        homeModel,
        aboutModel
    })
})

module.exports = router