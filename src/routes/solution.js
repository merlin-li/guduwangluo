// 解决方案
const router = require('koa-router')()

router.get('/solution', async(ctx, next) => {
    await ctx.render('solution', {
        title: '解决方案'
    });
})

router.get('/solution/:id', async(ctx, next) => {
    await ctx.render('solutiondetail', {
        title: '解决方案详情'
    })
})

module.exports = router