import {headers} from '../../../config/config';
import {MESSAGE} from '../../../constants/api/message';
import {Payload} from '../../../@types/api/api.types';
import { request } from '../api';

const {get} = request;

const initialRoute = '/userDetail';

export const userList = async (filter: any) => {
  try {
    const endpoint = `${initialRoute}/get_userList`;
     const response = await get(
        endpoint,
        {
            ...headers,
        },
        filter
    );

    if (response) {
      const {
        data: {message},
      } = response;
      if (message === MESSAGE.get.succ) {
        const {
          data: {result,pagination},
        } = response;
        return {result,pagination};
      }
    }
    throw new Error();
  } catch (error: unknown) {
    console.log(error);
    throw error;
  }
};
