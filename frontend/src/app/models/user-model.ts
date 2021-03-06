export class UserModel {
  id: string;
  email: string;
  login: string;
  password: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  birthDate: Date;
  role: number;
  blocked: number;
  discount: number;

  static cloneBase(user: UserModel):UserModel{
    const cloneUserModel: UserModel = new UserModel();
    cloneUserModel.id = user.id;
    cloneUserModel.email = user.email;
    cloneUserModel.login = user.login;
    cloneUserModel.password = user.password;
    cloneUserModel.firstName = user.firstName;
    cloneUserModel.lastName = user.lastName;
    cloneUserModel.mobileNumber = user.mobileNumber;
    cloneUserModel.birthDate = user.birthDate;
    cloneUserModel.role = user.role;
    cloneUserModel.blocked = user.blocked;
    cloneUserModel.discount = user.discount;
    return cloneUserModel;
  }
}

export class UserSafeModel{
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  birthDate: Date;
  role: number;
  blocked: number;
  discount: number;

  static cloneBase(user: UserSafeModel):UserSafeModel{
    const cloneUserModel: UserSafeModel = new UserSafeModel();
    cloneUserModel.id = user.id;
    cloneUserModel.email = user.email;
    cloneUserModel.firstName = user.firstName;
    cloneUserModel.lastName = user.lastName;
    cloneUserModel.mobileNumber = user.mobileNumber;
    cloneUserModel.birthDate = user.birthDate;
    cloneUserModel.role = user.role;
    cloneUserModel.blocked = user.blocked;
    cloneUserModel.discount = user.discount;
    return cloneUserModel;
  }
}

export class AuthToken{
  token:string;
}
