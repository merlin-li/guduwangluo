let mongoose = require('mongoose')
let dbModels = require('../models')

module.exports = {
    async getAboutUs() {
        return await dbModels.category.findOne({name: '关于我们'})
    },
    async getContcat() {
        return await dbModels.category.findOne({name: '联系我们'})
    },
    async getBannerData(name) {
        return await dbModels.category.findOne({name})
    },
    async getHomeData() {
        return await dbModels.option.findOne({name: 'siteInfo'})
    },
    async getHomeCategories() {
        return await dbModels.category.find({keywords: 'homecategory'})
    },
    async getHomeProducts(ids) {
        let result = []
        let products = await dbModels.content
            .find({})
            .where('category').in(ids)
            .sort('-date')

        for (let i = 0; i < products.length; i++) {
            let thumbnail = await this.getMediaById(products[i].thumbnail)
            let id = '/' + thumbnail._id + '/'
            let prefix = 'http://houtaiguanli.goodwangluo.com/media/'
            let month = thumbnail.date.getMonth() + 1
            month = month >= 10 ? month.toString() : '0' + month.toString()
            let date = thumbnail.date.getFullYear().toString() + month.toString()

            result.push({
                thumbnail: prefix + date + id + thumbnail.fileName,
                id: products[i]._id,
                title: products[i].title,
                abstract: products[i].abstract,
                category: products[i].category
            })
        }

        return result
    },
    async getHomeContents() {
        let homeContents = []
        let thumbnails = []
        let homeCategories = await dbModels.category.find({
            keywords: 'homecategory'
        })

        for (let item of homeCategories) {
            homeContents.push(await dbModels.content.findOne({category: item._id}))
        }

        // console.log(homeContents)
        for (let i = 0; i < homeContents.length; i++) {
            let thumbnail = await this.getMediaById(homeContents[i].thumbnail)
            let id = '/' + thumbnail._id + '/'
            let prefix = 'http://houtaiguanli.goodwangluo.com/media/'
            let month = thumbnail.date.getMonth() + 1
            month = month >= 10 ? month.toString() : '0' + month.toString()
            let date = thumbnail.date.getFullYear().toString() + month.toString()
            thumbnails.push(prefix + date + id + thumbnail.fileName)
        }

        return {
            thumbnails,
            homeContents
        }
    },
    // 获取图片
    async getMediaById(id) {
        return await dbModels.media.findOne({_id: id})
    },
    async getContentById(id) {
        return await dbModels.content.findOne({_id: id})
    },
    async getSolutions() {
        let thumbnails = []
        let solutionObj = await dbModels.category.findOne({name: '解决方案'})
        let categoryId = solutionObj._id
        let solutionArray = await dbModels.content.find({
            category: categoryId
        })

        for (let i = 0; i < solutionArray.length; i++) {
            let thumbnail = await this.getMediaById(solutionArray[i].thumbnail)
            let id = '/' + thumbnail._id + '/'
            let prefix = 'http://houtaiguanli.goodwangluo.com/media/'
            let month = thumbnail.date.getMonth() + 1
            month = month >= 10 ? month.toString() : '0' + month.toString()
            let date = thumbnail.date.getFullYear().toString() + month.toString()
            thumbnails.push(prefix + date + id + thumbnail.fileName)
        }

        return {
            thumbnails,
            solutionArray
        }
    },
    // 获取行业资讯
    async getNews() {
        let thumbnails = []
        let newsCategory = await dbModels.category.findOne({keywords: 'homenews'})
        let newsCategoryId = newsCategory._id
        let newsArray = await dbModels.content
            .find({category: newsCategoryId})
            .sort('-date')
            .limit(6)

        for (let i = 0; i < newsArray.length; i++) {
            let thumbnail = await this.getMediaById(newsArray[i].thumbnail)
            let id = '/' + thumbnail._id + '/'
            let prefix = 'http://houtaiguanli.goodwangluo.com/media/'
            let month = thumbnail.date.getMonth() + 1
            month = month >= 10 ? month.toString() : '0' + month.toString()
            let date = thumbnail.date.getFullYear().toString() + month.toString()
            thumbnails.push(prefix + date + id + thumbnail.fileName)
        }

        return {
            thumbnails,
            newsArray
        }
    },
    // 添加联系我们
    async addContact(contactObj) {
        let contactModel = await new dbModels.contact(contactObj)
        contactModel.save((error, doc) => {
            if (error) {
                return {
                    'success': 'false'
                }
            } else {
                return {
                    'success': 'true'
                }
            }
        })
    },
    async getContacts() {
        return await dbModels.contact.find()
    }
};