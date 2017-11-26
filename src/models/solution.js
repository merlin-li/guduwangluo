var mongoose = require('mongoose');
var Solution = new mongoose.Schema({
    id: {
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

export default Solution;