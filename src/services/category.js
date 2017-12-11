let mongoose = require('mongoose');
let dbModels = require('../models');

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
    }
};