// 关于我们
const router = require('koa-router')()
const categoryService = require('../services/category')

router.get('/about', async(ctx, next) => {
    let aboutData = await categoryService.getAboutUs()

    await ctx.render('about', {
        aboutModel: aboutData[0]
    });
})

module.exports = router