// 联系我们
const router = require('koa-router')()
const marked = require('marked')
const categoryService = require('../services/goodService')

router.get('/connect', async(ctx, next) => {
    let contactModel = await categoryService.getContcat()
    let homeModel = await categoryService.getHomeData()
    
    contactModel.mixed.pageContent = marked(contactModel.mixed.pageContent.toString())
    
    await ctx.render('connect', {
        contactModel,
        homeModel
    })
})

router.post('/contact', async(ctx, next) => {
    let {
        name,
        companyName,
        telphone,
        qq,
        message
    } = ctx.request.body

    ctx.body = await categoryService.addContact({
        name,
        qq,
        message,
        telphone,
        companyName
    })
})

router.get('/contacts/wangyuyang/niubi', async(ctx, next) => {
    let result = await categoryService.getContacts()
    ctx.body = {
        result: result
    }
})

module.exports = router