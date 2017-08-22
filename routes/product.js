import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  photo: [String],
  description: String,
  detail: {
    product_serial_num: String,
    product_standard_num: String,
    factory_name: String,
    factory_address: String,
    phone_num: String,
    expire_date: Number,
    production_date: String,
    food_additive: String,
    net_content: Number,
    package_manner: String,
    food_kind: String,
    burden_sheet: String,
    store_method: String,
  },
  kind: { type: [Number], required: true },
  price: { type: [Number], required: true },
  remain: { type: [Number], required: true },
  specification: { type: String, default: '克', required: true },
  salesCount: Number,
  commentsCount: Number,
  updateDate: { type: Date, default: Date.now },
});

export default mongoose.model('Product', productSchema);