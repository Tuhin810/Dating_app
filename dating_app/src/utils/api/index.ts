import { customerogin, googleLogin, signupCustomer } from "./auth/login";
import { getOtp } from "./auth/otp";

export const api = {
  auth: {
    customerogin,
    signupCustomer,
    googleLogin,
    getOtp,
  },

};
