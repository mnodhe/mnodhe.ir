export interface GetUserProfile_Res_Interface {
    result: GetUserProfile_Res_Result_Interface;
    message: string;
    success: boolean;
}
export interface GetUserProfile_Res_Result_Interface {
    fullName: string;
    email: string;
    gender: boolean | null;
    otherPhone: string;
    shebaNumber: string;
    countryId: number;
    profilePicture: string;
    username: string;
}
export interface RefreshToken_Res_Interface {
    result: {
      token: string;
      expireDate: number;
      userProfile: GetUserProfile_Res_Result_Interface;
    };
    message: string;
    success: boolean;
  }
  