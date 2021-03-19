import {AppActionTypes, CHANGE_LOADING, FETCH_USER_AUTH, FETCH_USER_REGISTRATION} from "./types";
import {User} from "../common/models";

export interface appReducerState {
    loading: boolean;
    user: User | null
}

const initialState: appReducerState = {loading: false, user: null};

export const appReducer = (state = initialState, action: AppActionTypes) => {

    switch (action.type) {
        case FETCH_USER_AUTH: {
            return {...state, user: action.payload}
        }
        case CHANGE_LOADING: {
            return {...state, loading: action.payload}
        }
        case FETCH_USER_REGISTRATION: {
            return {...state, user: action.payload}
        }
        default:
            return state
    }
}
