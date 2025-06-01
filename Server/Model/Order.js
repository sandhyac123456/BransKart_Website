const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    address: {
      email: String,
      username: String,
      hno: String,
      street: String,
      landmark: String,
      city: String,
      state: String,
      country: String,
      pincode: Number,
      mobile: Number,
    },
    paymentMethod: String,
    cartItems: Array,
    total: Number,
    tax: Number,
    grandTotal: Number,

    paymentStatus: {
      type: String,
      enum: ['Pending', 'Success', 'Failed'],
      default: 'Pending',
    },

    razorpayOrderId: String,
    razorpayPaymentId: String,
    razorpaySignature: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Orders', orderSchema);
