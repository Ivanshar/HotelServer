export class UserModel {
  id: string;
  email: string;
  login: string;
  password: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  logoUrl: string;
  birthDate: Date;
  role: boolean;

  static cloneBase(user: UserModel):UserModel{
    const cloneUserModel: UserModel = new UserModel();
    cloneUserModel.id = user.id;
    cloneUserModel.email = user.email;
    cloneUserModel.login = user.login;
    cloneUserModel.password = user.password;
    cloneUserModel.logoUrl = user.logoUrl;
    cloneUserModel.firstName = user.firstName;
    cloneUserModel.lastName = user.lastName;
    cloneUserModel.mobileNumber = user.mobileNumber;
    cloneUserModel.birthDate = user.birthDate;
    cloneUserModel.role = user.role;
    return cloneUserModel;
  }
}

export class UserSafeModel{
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  logoUrl: string;
  birthDate: Date;
  role: boolean;

  static cloneBase(user: UserSafeModel):UserSafeModel{
    const cloneUserModel: UserSafeModel = new UserSafeModel();
    cloneUserModel.id = user.id;
    cloneUserModel.email = user.email;
    cloneUserModel.logoUrl = user.logoUrl;
    cloneUserModel.firstName = user.firstName;
    cloneUserModel.lastName = user.lastName;
    cloneUserModel.mobileNumber = user.mobileNumber;
    cloneUserModel.birthDate = user.birthDate;
    cloneUserModel.role = user.role;
    return cloneUserModel;
  }
}
