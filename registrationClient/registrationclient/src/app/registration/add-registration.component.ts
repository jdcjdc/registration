import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Registration} from "../models/registration.model";
import {RegistrationService} from "./registration.service";

@Component({
  selector: 'app-add-registration',
  templateUrl: './add-registration.component.html',
  styleUrls: ['./add-registration.component.css']
})
export class AddRegistrationComponent implements OnInit {

  registration: Registration; // jdc todo:  = new Registration();

  constructor(private router: Router, private registrationService: RegistrationService) { }

  ngOnInit() {
  }

  createRegistration(): void {
    this.registrationService.createRegistration(this.registration)
      .subscribe( data => {
        alert("Registration created successfully.");
      });

  };

}
