const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const cartsSchema = new Schema(
  {
    id: {
      type: String,
      trim: true,
      required: [true, "vui lòng nhập tên"],
    },
    sugar: {
      type: String,
      trim: true,
    },
    size: {
      type: String,
      default: "mien phi",
    },
    price: { type: String },
    img: { type: String },
    slug: {
      type: String,
      slug: "name",
      unique: true,
    },
    level: {
      type: String,
      required: [true, "vui lòng nhập cấp độ"],
    },
  },
  {
    collection: "couers",
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

couerSchema.pre(/^find/, function (next) {
  this.populate({ path: "Lesson" });
  next();
});
module.exports = mongoose.model("carts", cartsSchema);
