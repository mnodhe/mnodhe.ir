import { GetUserProfile_Res_Result_Interface } from "./API_Interface";

export interface Redux_Interface {
    Login: LoginRedux;
    UIData: UIDataRedux
}
export interface UIDataRedux {
    direction: "ltr" | "rtl";
}
export interface LoginRedux {
    loginstate: boolean;
    Token: string | null;
    ExpireDate: number | null;
    UserProfile: GetUserProfile_Res_Result_Interface;
}
