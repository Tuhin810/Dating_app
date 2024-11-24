import { userLogin} from "./auth/login";
import { getOtp } from "./auth/otp";
import { userList } from "./users/users";

export const api = {
  auth: {
    userLogin
  },
  user:{
    userList
  }

};
