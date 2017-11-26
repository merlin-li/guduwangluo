// 关于我们
const router = require('koa-router')()

router.get('/about', async(ctx, next) => {
    await ctx.render('about', {
        title: '关于我们'
    });
})

module.exports = router