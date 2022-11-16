import { LoginRedux } from "../../../Interfaces/Redux_Interface";

export let LoginTree_Red: LoginRedux = {
    loginstate: false,
    Token: "",
    ExpireDate: 0,
    UserProfile: { countryId: 105, email: "", fullName: "", gender: null, otherPhone: "", profilePicture: "", shebaNumber: "", username: "" }
};
const LoginStateReducer = (state: LoginRedux = LoginTree_Red, action: any) => {
    switch (action.type) {
        case "SetLogin":
            LoginTree_Red.loginstate = action.payload.loginstate;
            LoginTree_Red.Token = action.payload.Token;
            LoginTree_Red.ExpireDate = action.payload.ExpireDate;
            LoginTree_Red.UserProfile = action.payload.UserProfile;
            const newState = Object.assign({}, state, LoginTree_Red)
            return newState;
        default:
            return state;
    }
};
export default LoginStateReducer;
