const router = require('koa-router')()
const mongoose = require('mongoose')

router.get('/', async(ctx, next) => {
    // let db = mongoose.connect('mongodb://localhost/test');


    // db.connection.on('error', (error) => {
    //     console.log('数据库连接失败' + error)
    // });
    // db.connection.on('open', () => {
    //     console.log('mongodb connection success.')
    // });
    // db.connection.on('disconnected', () => {
    //     console.log('mongodb disconnected.')
    // });

    // var TestSchema = new mongoose.Schema({
    //     name : { type:String },
    //     age  : { type:Number, default:0 },
    //     email: { type:String },
    //     time : { type:Date, default:Date.now }
    // });
    // var TestModel = db.model("test1", TestSchema );
    // var TestEntity = new TestModel({
    //     name : "helloworld",
    //     age  : 28,
    //     email: "helloworld@qq.com"
    // });

    // TestEntity.save((error, doc) => {
    //     if (error) {
    //         console.log(error)
    //     } else {
    //         console.log(doc)
    //     }
    // });

    await ctx.render('index', {
        title: '咕德网络'
    });
})
module.exports = router