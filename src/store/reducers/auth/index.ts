import { AutchAction, AuthActionEnum, AuthState } from "./types";

const initialState: AuthState = {
  auth: false,
};

export default function authReducer(
  state = initialState,
  action: AutchAction
): AuthState {
  switch (action.type) {
    case AuthActionEnum.SET_AUTH:
      return {
        ...state,
        auth: action.payload,
      };

    default:
      return state;
  }
}
