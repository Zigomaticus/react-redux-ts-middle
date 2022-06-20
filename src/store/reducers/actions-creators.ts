import { AuthActionCreators } from "./auth/action-creaters";
import { EventActionsCreaators } from "./event/actions-creators";

export const allActionCreators = {
  ...AuthActionCreators,
  ...EventActionsCreaators,
};
