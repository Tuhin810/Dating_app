import initialState from "./store";
import actions from "./actions";
import reducer from "./reducer";
import { useCallback, useReducer } from "react";
import { ContextProviderProps } from "../context.types";
import AuthContext from "./authContext"

const AuthContextProvider = ({ children }: ContextProviderProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const value = {
		user: state.user,
		// eslint-disable-next-line react-hooks/exhaustive-deps
		setUser: useCallback((user: any) => dispatch({ type: actions.SET_USER, payload: { ...state, user } }), [])
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
