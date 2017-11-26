var mongoose = require('mongoose');
var News = new mongoose.Schema({
    id: {
        type: Number
    },
    newsTypeId: {
        type: Number
    },
    title: {
        type: String
    },
    des: {
        type: String
    },
    thumbnail: {
        type: String
    },
    content: {
        type: String
    }
});

export default News;