// 技术外包
const router = require('koa-router')()

router.get('/qutsourcing', async(ctx, next) => {
    await ctx.render('qutsourcing', {
        title: '技术外包'
    });
})

module.exports = router