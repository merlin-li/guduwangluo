// test
const router = require('koa-router')()
const categoryService = require('../services/category')

router.get('/test', async(ctx, next) => {
    let aboutData = await categoryService.getAboutUs()
    console.log(aboutData[0].mixed)

    await ctx.render('test', {
        title: aboutData[0].name,
        keywords: aboutData[0].keywords,
        description: aboutData[0].description,
        content: aboutData[0].mixed.pageContent,
        obj: aboutData[0]
    });
})

module.exports = router