export enum ETokenStatus {
  VALID = 'VALID',
  INVALID = 'INVALID',
}
export interface IVerifyTokenResponse {
  accessTokenExpirationTime: number;
  refreshTokenExpirationTime: number;
  code: ETokenStatus;
  message: string;
  id: string;
  role: string;
}
