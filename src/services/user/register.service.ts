import { UserInfo } from '../../app/+root/+Console/EditUser/components/UserInfo';

export class Register {

  public static async registerByMobile(user: UserInfo) {
    return Promise.resolve(user);
  }

  public static async registerByEmail(user: UserInfo) {
    return Promise.resolve(user);    
  }

  public static validateMobile(mobileNumber: number) {
    console.log(mobileNumber);
    return null;
  }

  public static validateEmail(email: string) {
    console.log(email);
  }

}
