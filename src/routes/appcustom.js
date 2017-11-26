// app定制
const router = require('koa-router')()

router.get('/appcustom', async(ctx, next) => {
    await ctx.render('appCustomized', {
        title: '定制，是一种态度！'
    });
})

module.exports = router