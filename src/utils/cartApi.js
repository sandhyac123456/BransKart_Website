import axios from "axios";

//  Add item to cart
export const addToCart = async (userId, item) => {
  try {
    const res = await axios.post(`http://localhost:5000/api/cart`, {
      userId,
      product:item,
    });
    return res.data;
  } catch (error) {
    console.log("Add to cart error", error);
  }
};

//  Get user's cart items
export const getCart = async (userId) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/cart/${userId}`);
    return res.data;
  } catch (error) {
    console.log("Get cart error", error);
  }
};

//  Remove an item from cart
export const removeFromCart = async (userId, productId) => {
  try {
    const res = await axios.delete(
      `http://localhost:5000/api/cart/remove/${userId}/${productId}`
    );
    return res.data;
  } catch (error) {
    console.log("Remove from cart error", error);
  }
};

//  Update quantity of an item in cart
export const updateQuantity = async (userId, productId, quantity) => {
  try {
    const res = await axios.put(`http://localhost:5000/api/cart/update/${userId}`, {
      productId,
      quantity,
    });
    return res.data;
  } catch (error) {
    console.log("Update quantity error", error);
  }
};