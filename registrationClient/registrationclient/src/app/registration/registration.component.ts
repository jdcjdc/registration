import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrations: Registration[];

  constructor(private router: Router, private registrationService: RegistrationService) {
  }

  ngOnInit() {
    this.registrationService.getRegistrations()
      .subscribe( data => {
        this.registrations = data;
      });
  }

  deleteUser(registration: Registration): void {
    this.registrationService.deleteRegistration(registration)
      .subscribe( data => {
        this.registrations = this.registrations.filter(u => u !== registration);
      })
  };

}
