const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

// 首页
const index = require('./routes/index')
// 关于我们
const about = require('./routes/about')
// App定制
const appcustom = require('./routes/appcustom')
// 联系我们
const connect = require('./routes/connect')
// 技术外包
const qutsourcing = require('./routes/qutsourcing')
// 建站套餐
const sitepackage = require('./routes/sitepackage')
// 客户案例、客户案例详情
const customcase = require('./routes/customcase')
// 解决方案、解决方案详情
const solution = require('./routes/solution')
// 行业资讯
const news = require('./routes/news')


// error handler
onerror(app)

// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
    extension: 'ejs'
}))

// logger
app.use(async(ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(about.routes(), about.allowedMethods())
app.use(connect.routes(), connect.allowedMethods())
app.use(appcustom.routes(), appcustom.allowedMethods())
app.use(sitepackage.routes(), sitepackage.allowedMethods())
app.use(qutsourcing.routes(), qutsourcing.allowedMethods())
app.use(customcase.routes(), customcase.allowedMethods())
app.use(solution.routes(), solution.allowedMethods())
app.use(news.routes(), news.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

module.exports = app