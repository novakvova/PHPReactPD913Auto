import { AuthAction, AuthActionTypes, ILoginResponse } from '../../types/auth';
import {Dispatch} from "react";
import http from '../../http_common';

export interface ILoginModel {
    email: string,
    password: string
}

export const loginUser = (data: ILoginModel) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({type: AuthActionTypes.LOGIN_AUTH});
            const response = await http.post<ILoginResponse>('api/auth/login', data);
            dispatch({type: AuthActionTypes.LOGIN_AUTH_SUCCESS, payload: response.data.user});
        }
        catch(error) {
            dispatch({type: AuthActionTypes.LOGIN_AUTH_ERROR, payload: "Error"});
        }
    }
}