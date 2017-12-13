// 技术外包
const router = require('koa-router')()
const optionService = require('../services/goodService')

router.get('/qutsourcing', async(ctx, next) => {
    let homeModel = await optionService.getHomeData()
    await ctx.render('qutsourcing', {
        title: '技术外包',
        homeModel
    });
})

module.exports = router