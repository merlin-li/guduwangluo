// 客户案例
const router = require('koa-router')()
const marked = require('marked')
const optionService = require('../services/goodService')

router.get('/customerCase', async(ctx, next) => {
    let homeCategories = await optionService.getHomeCategories()
    let homeDataObj = await optionService.getHomeContents()
    let homeModel = await optionService.getHomeData()
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

    await ctx.render('customcase', {
        title: '客户案例',
        homeCategories,
        homeRenderArray,
        homeModel
    });
})

router.get('/customerCase/:id', async(ctx, next) => {
    let caseId = ctx.params.id
    let homeModel = await optionService.getHomeData()
    let caseModel = await optionService.getContentById(caseId)

    caseModel.content = marked(caseModel.content.toString())
    await ctx.render('customcasedetail', {
        caseModel,
        homeModel
    })
})

module.exports = router