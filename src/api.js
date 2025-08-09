import http from "./config/http";
//api page Home
export const getApplicationUserEdit = () => http.get("/ApplicationUser/GetApplicationUserEdit");

export const getUser = () => http.get("/ApplicationUser/GetUser");

// export const getAllReferral = ({ PageSize = 10, PageNumber = 1 }) =>
//   http.get(
//     `Referral/GetReferralList?PageSize=${PageSize}&PageNumber=${PageNumber}`
//   );

// export const postReferralCode = (body) => http.post("Referral/ReferralCodeAfterRegister", body);
