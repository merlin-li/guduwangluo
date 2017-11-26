// 行业资讯
const router = require('koa-router')()

router.get('/news/:id', async(ctx, next) => {
    await ctx.render('news', {
        title: '行业资讯'
    });
})

module.exports = router