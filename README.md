# 🛍️ BrainsKart - E-commerce Website (MERN Stack)

This is a full-featured E-commerce Website built using the MERN stack (MongoDB, Express, React, Node.js). It includes complete user authentication, secure data handling, a Razorpay payment system, and a responsive UI for browsing and purchasing products.

---

## 📝 Project Description

This is a modern, full-stack E-commerce platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It offers a secure and responsive shopping experience, featuring:

- User registration and login using JWT and bcrypt for authentication and password encryption  
- Protected routes with role-based access for enhanced security  
- Product browsing and filtering through a dynamic React interface  
- Shopping cart and order placement workflows  
- Razorpay integration for secure and seamless payments  
- User profile management for updating personal info and viewing past orders  
- Responsive UI built with modern React components and mobile-first design  
- Backend REST API built using Express and Mongoose for efficient database operations  

**Note:** Payment functionality is integrated with Razorpay, and you must use your own Razorpay credentials (Key ID and Secret Key) in your environment variables to enable secure transactions.

---

## 🚀 Technologies Used

### 🧩 Stack

- MongoDB – NoSQL database  
- Express.js – RESTful API backend  
- React.js – Frontend user interface  
- Node.js – Backend runtime  

### 📚 Libraries & Tools

- Axios – For HTTP requests from the frontend  
- React Hook Form – Form handling and validation  
- Express – Backend server framework  
- Mongoose – ODM for MongoDB  
- bcrypt – Password hashing  
- jsonwebtoken (JWT) – Token-based authentication  
- dotenv – Environment variable management  
- Razorpay – Payment gateway integration  

---

## 🔧 Features

### 🔐 User Authentication:

- Secure sign-up and login with JWT & bcrypt  
- Protected routes and role-based access  

### 🛍️ Product Browsing:

- Users can browse, filter, and view product details  

### 💳 Ordering System:

- Users can place orders and view order history  

### 👤 Profile Management:

- Edit personal details and track past orders  

### 📱 Responsive Design:

- Mobile-friendly UI built with modern components  

### 💰 Payment Integration

- Razorpay integrated for secure and seamless payments  

---

## 🔐 Security Note

Use your own Razorpay Key ID and Secret Key in the environment variables (`.env` file) to ensure proper security and functionality.

---

## 🧾 Features:

- Razorpay Checkout form for fast, secure payments  
- Unique order IDs are generated server-side using the Razorpay SDK  
- Backend validation of payment success  
- Frontend shows the live status of the payment  

---

## 📁 Project Structure

```plaintext
ecommerce-project/
├── public/
├── src/
│   ├── assets/         # Static files like images, styles
│   ├── context/        # Global context (Cart etc.)
│   ├── Products/       # Product-related pages/components
│   ├── Redux/          # Store & Slice
│   ├── Root/           # Layouts and shared components
│   ├── utils/          # cartApi
│   ├── App.jsx
│   └── main.jsx
├── Server/                 # Node.js + Express Backend
│   ├── controllers/        # forgotPassword, resetPassword, register, login
│   ├── models/             # User, Product, Order, Cart
│   ├── routes/              # auth, product, order, cart, payment
│   ├── utils/               # sendEmail
|   |── uploads/              # image upload
│   └── server.js
├── index.html
├── README.md
└── package.json