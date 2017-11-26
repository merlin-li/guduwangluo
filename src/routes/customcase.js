// 客户案例
const router = require('koa-router')()

router.get('/customerCase', async(ctx, next) => {
    await ctx.render('customcase', {
        title: '客户案例'
    });
})

router.get('/customerCase/:id', async(ctx, next) => {
    await ctx.render('customcasedetail', {
        title: '客户案例详情'
    })
})

module.exports = router