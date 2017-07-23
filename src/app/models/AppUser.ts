export type gender = 'male' | 'female';

export interface AppUser {
  primaryAddress: string;
  uuid: number;
  unionID: string;
  openID: string;
  nickName: string;
  firstName: string;
  lastName: string;
  gender: gender;
  city: string;
  province: string;
  country: string;
  avatarUrl: string;
  phone: null;
  email: null;
  password: null;
  createdAt: string;
  updatedAt: string;
}
