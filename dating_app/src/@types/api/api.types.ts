/* eslint-disable no-mixed-spaces-and-tabs */
import { AUTHORIZATION } from "../../constants/api/auth";

const { Bearer } = AUTHORIZATION;

export type Endpoint = string;
export type Params = Record<string, unknown>;

type AuthHeader = {
	Authorization: `${typeof Bearer} ${string}`;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Payload = any;

export type Headers =
	| {
			Accept: string;
			"Content-Type": string;
	  }
	| AuthHeader;
