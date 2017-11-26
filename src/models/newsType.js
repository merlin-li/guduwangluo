var mongoose = require('mongoose');
var NewsType = new mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    }
});

export default NewsType;