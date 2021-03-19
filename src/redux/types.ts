import {User} from "../common/models";

export const CHANGE_PANEL_STATE = 'PANELS/CHANGE_STATE'

// Запрос данных

export interface FetchUserAuth {
    type: typeof FETCH_USER_AUTH;
    payload: {user: User}
}

export interface ChangeLoading {
    type: typeof CHANGE_LOADING,
    payload: boolean
}

export interface FetchUserRegistration {
    type: typeof FETCH_USER_REGISTRATION;
    payload: {user: User}
}

export const FETCH_USER_AUTH = 'APP/FETCH_USER'
export const CHANGE_LOADING = 'APP/CHANGE_LOADING'
export const FETCH_USER_REGISTRATION = 'APP/FETCH_USER_REGISTRATION'

export type AppActionTypes = FetchUserAuth | ChangeLoading | FetchUserRegistration
