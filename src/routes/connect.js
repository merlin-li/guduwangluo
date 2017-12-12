// 联系我们
const router = require('koa-router')()
const categoryService = require('../services/goodService')

router.get('/connect', async(ctx, next) => {
    let contactData = await categoryService.getContcat()
    let contactModel = contactData[0]
    let pageContent = ''

    if (contactModel.mixed && contactModel.mixed.pageContent) {
        pageContent = contactModel.mixed.pageContent.replace('\n', '<br/>')
        pageContent = pageContent.replace('\n', '<br/>')
        pageContent = pageContent.replace('\n', '<br/>')
    }

    await ctx.render('connect', {
        contactModel,
        pageContent
    });
})

module.exports = router