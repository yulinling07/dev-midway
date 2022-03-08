/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  id: number;
  username: string;
  password: string;
}

export interface IGetUserResponse {
  success: boolean;
  message: string;
  data?: IUserOptions;
}
