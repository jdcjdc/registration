export class Registration {
  title = "Registration";
  firstName = 'first name';
  lastName = 'last name';
  emailAddress = 'email address';
  password = 'password';
  confirmPassword = 'confirm password';

  constructor(title: string, firstName: string, lastName: string, emailAddress: string, password: string, confirmPassword: string) {
    this.title = title;
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }
}
