export interface AuthState {
  isAuth: boolean;
}

export enum AuthActionEmun {
  SET_AUTH = "SET_AUTH",
}

export interface SetAuthAction {
  type: AuthActionEmun.SET_AUTH;
  payload: boolean;
}

export type AuthAction = SetAuthAction;
