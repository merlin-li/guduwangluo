// 客户案例
const router = require('koa-router')()
const marked = require('marked')
const optionService = require('../services/goodService')

router.get('/customerCase', async(ctx, next) => {
    let homeCategories = await optionService.getHomeCategories()
    let homeDataObj = await optionService.getHomeContents()
    let homeModel = await optionService.getHomeData()
    let homeRenderArray = []
    let categoryIDs = []

    for (let i = 0; i < homeCategories.length; i++) {
        categoryIDs.push(homeCategories[i]._id)
    }

    let homeProducts = await optionService.getHomeProducts(categoryIDs)

    await ctx.render('customcase', {
        title: '客户案例',
        homeCategories,
        homeProducts,
        homeModel
    });
})

router.get('/customerCase/:id', async(ctx, next) => {
    let caseId = ctx.params.id
    let homeModel = await optionService.getHomeData()
    let caseModel = await optionService.getContentById(caseId)

    optionService.updateContentById(caseId)
    caseModel.content = marked(caseModel.content.toString())
    await ctx.render('customcasedetail', {
        caseModel,
        homeModel
    })
})

module.exports = router