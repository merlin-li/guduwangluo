// test
const router = require('koa-router')()
const categoryService = require('../services/goodService')

router.get('/test', async(ctx, next) => {
    let aboutData = await categoryService.getAboutUs()
    let homeData = await categoryService.getHomeContents()

    await ctx.render('test', {
        title: aboutData[0].name,
        keywords: aboutData[0].keywords,
        description: aboutData[0].description,
        content: aboutData[0].mixed.pageContent,
        obj: homeData.homeContents
    });
})

module.exports = router