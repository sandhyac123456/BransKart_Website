const express = require("express");
const router = express.Router();
const Order = require("../Model/Order");

// Create order
router.post("/", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json({ message: "Order Placed Successfully !" });
  } catch (err) {
    res.status(500).json({ error: "Failed to Save order", err });
  }
});

// Get address by user email
router.get("/user-address-email/:email", async (req, res) => {
  const email = req.params.email;  // fix: get from params directly

  try {
    const Orders = await Order.find({ "address.email": email }).sort({ createdAt: -1 });
    const order = Orders[0]; // Get the latest order
    if (order) {
      res.json(order.address);
    } else {
      res.status(404).json({ message: "Address not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch address", error });
  }
});

// Get all orders in orderHistory
router.get("/", async (req, res) => {
  const orders = await Order.find().sort({
    createdAt: 1,
  });
  res.json(orders);
});

// GET today's orders
router.get("/today", async (req, res) => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);

  const end = new Date();
  end.setHours(23, 59, 59, 999);

  const todayOrders = await Order.find({ createdAt: { $gte: start, $lte: end } }).sort({
    createdAt: 1,
  });

  res.json(todayOrders);
});

// GET orders by date range
router.post("/range", async (req, res) => {
  const { startDate, endDate } = req.body;
  const orders = await Order.find({
    createdAt: {
      $gte: new Date(startDate),
      $lte: new Date(endDate),
    },
  });
  res.json(orders);
});

// Delete Order
router.delete("/:orderId", async (req, res) => {
  const { orderId } = req.params;
  try {
    const deleteOrder = await Order.findByIdAndDelete(orderId);
    if (!deleteOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Order Delete Successfully !" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Fetch userid,name,email.....
// Get user info (username + email) from latest order using userId
router.get("/latest-order/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the latest order of the user
    const latestOrder = await Order.findOne({ userId }).sort({ createdAt: -1 });

    if (!latestOrder) {
      return res.status(404).json({ message: "No orders found for this user" });
    }

    res.status(200).json(latestOrder);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch user info", error: err });
  }
});

// *** New Route: Update payment status of an order ***
router.put("/update-payment-status/:orderId", async (req, res) => {
  const { orderId } = req.params;
  const { paymentStatus, razorpayOrderId, razorpayPaymentId, razorpaySignature } = req.body;

  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      {
        paymentStatus,
        razorpayOrderId,
        razorpayPaymentId,
        razorpaySignature,
      },
      { new: true } // Return the updated document
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(updatedOrder);
  } catch (err) {
    res.status(500).json({ message: "Failed to update payment status", error: err.message });
  }
});

module.exports = router;
