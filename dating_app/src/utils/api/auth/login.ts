import {headers} from '../../../config/config';
import {MESSAGE} from '../../../constants/api/message';
import {Payload} from '../../../@types/api/api.types';
import { request } from '../api';

const {post} = request;

const initialRoute = '/auth';

export const googleLogin = async (payload: Payload) => {
  try {
    const endpoint = `${initialRoute}/google-login`;
    const response = await post(endpoint, payload, {
      ...headers,
    });
    if (response) {
      const {
        data: {message},
      } = response;
      if (message === MESSAGE.post.succAuth) {
        const {
          data: {result},
        } = response;
        return result;
      }
    }
    throw new Error();
  } catch (error: unknown) {
    console.log(error);
    throw error;
  }
};
export const customerogin = async (payload: Payload) => {
  try {
    const endpoint = `${initialRoute}/login-customer`;
    const response = await post(endpoint, payload, {
      ...headers,
    });
    if (response) {
      const {
        data: {message},
      } = response;
      if (message === MESSAGE.post.succAuth) {
        const {
          data: {result},
        } = response;
        return result;
      }
    }
    throw new Error();
  } catch (error: unknown) {
    console.log(error);
    throw error;
  }
};

export const signupCustomer = async (payload: Payload) => {
  try {
    const endpoint = `${initialRoute}/signup-customer`;
    const response = await post(endpoint, payload, {
      ...headers,
    });
    if (response) {
      const {
        data: {message},
      } = response;
      if (message === MESSAGE.post.succAuth) {
        const {
          data: {result},
        } = response;
        return result;
      }
    }
    throw new Error();
  } catch (error: unknown) {
    console.log(error);
    throw error;
  }
};
