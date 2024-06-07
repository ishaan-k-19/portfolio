const mongoose = require ('mongoose')
const {Schema, model } = mongoose;

const FormSchema = new Schema({
    first_name:{ type: String},
    last_name:{ type: String},
    email:{ type: String},
    phone: {type:String},
    message:{ type: String},
    createdAt:{ type: Date,  default: Date.now},
});

module.exports = mongoose.model('forms', FormSchema)