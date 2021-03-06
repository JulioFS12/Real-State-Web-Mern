const { Schema, model } = require('mongoose');

const adminAuthSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

module.exports = model('AdminAuth', adminAuthSchema);