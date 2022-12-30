const { Schema, model, Types } = require('../connection');

const myschema = new Schema({
    name : String,
    email : String,
    ownerid : {type : Types.ObjectId, ref: 'users'},
    createdAt : Date
});

module.exports = model('subscribers', myschema);