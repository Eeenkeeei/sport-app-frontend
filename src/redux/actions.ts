import {CHANGE_LOADING, FETCH_USER_AUTH} from "./types";
import {ThunkAction} from "redux-thunk";
import {Store} from "./rootReducer";
import {Action} from "redux";

export const changeLoading = (payload: boolean) => {
    return {
        type: CHANGE_LOADING,
        payload
    }
}

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, Store, unknown, Action<string>>

export const _BACKEND_URL = process.env.REACT_APP_BACKEND!;

export const fetchUserAuth = (username: string, password: string): AppThunk => async (dispatch, store) => {
    fetch(_BACKEND_URL + '/auth', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            username,
            password
        })
    })
        .then(r => r.json())
        .then(r => {
            dispatch({type: FETCH_USER_AUTH, payload: {user: r}});
            dispatch(changeLoading(false))
        })
}

export const fetchUserRegistration = (username: string, password: string): AppThunk => async (dispatch, store) => {
    fetch(_BACKEND_URL + '/reg', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            username,
            password
        })
    })
        .then(r => r.json())
        .then(r => {
            if (r.result === "ok") {
                dispatch({type: FETCH_USER_AUTH, payload: {user: r}});
                dispatch(changeLoading(false))
            }
        })
}
