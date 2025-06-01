const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      name : {
        type: String,
        required: true,
      },
        price : {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    
}, { timestamps: true });

module.exports = mongoose.model("Carts", cartSchema);