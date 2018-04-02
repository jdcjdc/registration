import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  title = "Registration";
  firstName = 'first name';
  lastName = 'last name';
  emailAddress = 'email address';
  password = 'password';
  confirmPassword = 'confirm password';

  constructor() { }

  ngOnInit() {
  }

  saveRegistrationData()

}
