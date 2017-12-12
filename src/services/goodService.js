let mongoose = require('mongoose')
let dbModels = require('../models')

module.exports = {
    async getAboutUs() {
        return await dbModels.category.find({name: '关于我们'})
    },
    async getContcat() {
        return await dbModels.category.find({name: '联系我们'})
    },
    async getHomeData() {
        return await dbModels.option.find({name: 'siteInfo'})
    },
    async getHomeCategories() {
        return await dbModels.category.find({keywords: 'homecategory'})
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
            thumbnails.push(thumbnail.fileName)
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
            thumbnails.push(await this.getMediaById(solutionArray[i].thumbnail))
        }

        return {
            thumbnails,
            solutionArray
        }
    }
};