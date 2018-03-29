// 解决方案
const router = require('koa-router')()
const marked = require('marked')
const optionService = require('../services/goodService')

router.get('/solution', async(ctx, next) => {
    let result = await optionService.getSolutions()
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
    await ctx.render('solution', {
        title: '解决方案',
        solutionModel,
        homeModel
    })
})

router.get('/solution/:id', async(ctx, next) => {
    let caseId = ctx.params.id
    let homeModel = await optionService.getHomeData()
    let caseModel = await optionService.getContentById(caseId)

    optionService.updateContentById(caseId)
    caseModel.content = marked(caseModel.content.toString())
    await ctx.render('solutiondetail', {
        title: '解决方案详情',
        caseModel,
        homeModel
    })
})

module.exports = router