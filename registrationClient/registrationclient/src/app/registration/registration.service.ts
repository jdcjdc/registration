import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Registration} from "../models/registration.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RegistrationService {

  constructor(private http:HttpClient) {}

  // private registrationUrl = 'http://localhost:8080/registration-portal/api';  // jdc todo works ? see proxy.config.json and http://www.devglan.com/spring-boot/spring-boot-angular-example
  private registrationUrl = '/api';

  public getRegistrations() {
    return this.http.get<Registration[]>(this.registrationUrl);
  }

  public deleteRegistration(registration) {
    return this.http.delete(this.registrationUrl + "/"+ registration.id);
  }

  public createRegistration(registration) {
    return this.http.post(this.registrationUrl, registration);
  }

}
