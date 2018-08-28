var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SaleSchema = new Schema(
  {
    products:[{item_id: {type: Number},
    item_name: {type: String, required: true, max: 1000},
    retail_price: {type: Number},
    factory_price: {type: Number}}],
    date_sale: {type: Date},
    Emp_Cnic: {type: String,  max: 1000},
    total: {type:Number},
  }
);

//Export model
module.exports = mongoose.model('Sale', SaleSchema);
