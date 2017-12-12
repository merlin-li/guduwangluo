// 解决方案
const router = require('koa-router')()
const optionService = require('../services/goodService')

router.get('/solution', async(ctx, next) => {
    let result = await optionService.getSolutions()
    let solutionModel = []
    if (result.thumbnails && result.solutionArray) {
        for (let i = 0; i < result.thumbnails.length; i++) {
            solutionModel.push({
                thumbnail: result.thumbnails[i].fileName,
                title: result.solutionArray[i].title,
                abstract: result.solutionArray[i].abstract,
                id: result.solutionArray[i]._id
            })
        }
    }
    await ctx.render('solution', {
        title: '解决方案',
        solutionModel
    });
})

router.get('/solution/:id', async(ctx, next) => {
    let url = ctx.url
    let caseId = url.substr(url.lastIndexOf('/') + 1)

    await ctx.render('solutiondetail', {
        title: '解决方案详情',
        caseModel: await optionService.getContentById(caseId)
    })
})

module.exports = router