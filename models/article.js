var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema(
  {
    item_id: {type: Number, default: 1},
    item_name: {type: String, required: true, max: 400},
    retail_price: {type: Number},
    factory_price: {type: Number},
    description: {type: String, max: 400}
   }
);

//Export model
module.exports = mongoose.model('Article', ArticleSchema);