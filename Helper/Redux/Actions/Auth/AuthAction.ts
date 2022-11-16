import { LoginRedux } from "../../../Interfaces/Redux_Interface";

export const SetLogin_Action = (data: LoginRedux) => {
  return {
    type: "SetLogin",
    payload: data,
  };
};
