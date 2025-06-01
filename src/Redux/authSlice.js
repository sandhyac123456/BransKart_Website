import { createSlice } from "@reduxjs/toolkit";

// Helper function: user specific keys for localStorage
const getUserKey = (email, key) => {
  if (!email) return null;
  return `user_${email}_${key}`;
};

// Last logged in user email key
const LAST_USER_EMAIL_KEY = "lastLoggedInUserEmail";

// Initial state: try to load last logged in user email from localStorage
const lastUserEmail = localStorage.getItem(LAST_USER_EMAIL_KEY);
const initialUser = lastUserEmail
  ? JSON.parse(localStorage.getItem(getUserKey(lastUserEmail, "data")))
  : null;

const initialCartCount = lastUserEmail
  ? Number(localStorage.getItem(getUserKey(lastUserEmail, "cartCount"))) || 0
  : 0;

const initialState = {
  user: initialUser,
  cartCount: initialCartCount,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      const userData = { ...action.payload, isLoggedIn: true };
      state.user = userData;
      state.cartCount = state.cartCount || 0;

      // Save user data in user-specific localStorage keys
      localStorage.setItem(getUserKey(userData.email, "data"), JSON.stringify(userData));
      localStorage.setItem(getUserKey(userData.email, "cartCount"), state.cartCount);

      // Also save last logged in user email
      localStorage.setItem(LAST_USER_EMAIL_KEY, userData.email);
    },

    logout(state) {
      if (state.user && state.user.email) {
        // Remove user-specific data from localStorage on logout
        localStorage.removeItem(getUserKey(state.user.email, "data"));
        localStorage.removeItem(getUserKey(state.user.email, "cartCount"));
        localStorage.removeItem(LAST_USER_EMAIL_KEY);
      }
      state.user = null;
      state.cartCount = 0;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;