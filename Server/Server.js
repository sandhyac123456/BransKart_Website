const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const useRouter = require("./Router/ProductRouter")
const CartRouter = require("./Router/CartRouter")
const OrderRouter = require("./Router/OrderRouter")
const PaymentRouter = require("./Router/PaymentRouter")
const authRoutes = require("./Router/authRoutes");
const path = require("path");

const cors = require('cors')

dotenv.config({
  path: "./.env",
});

app.use(cors());
// app.use(express.json());
app.use(express.json({ limit: "1mb" }));

let Hostname = process.env.Hostname;
let Port = process.env.Port ;

mongoose.connect(process.env.MongoDB_URL)
  .then(() => {
    console.log("mongoDb connection successfully !");
  })
  .catch(() => {
    console.log("mongoDb connection faild !");
  });

// use Products routers ....
  app.use("/api",useRouter)

// use Cart routers ....
 app.use("/api/cart",CartRouter)

// use Order routers ....
 app.use("/api/orders",OrderRouter)

 app.use("/api/razorpay",PaymentRouter)

 app.use("/api/auth", authRoutes);

 app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(Port, Hostname, () => {
  console.log(`Server is listening on port http://${Hostname}:${Port}`);
});
