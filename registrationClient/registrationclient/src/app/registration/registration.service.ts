import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RegistrationService {

  constructor(private http:HttpClient) {}

  private registrationUrl = 'http://localhost:8080/registration-portal/api';

  public getRegistrations() {
    return this.http.get(this.registrationUrl);
  }

  public deleteRegistration(registration) {
    return this.http.delete(this.registrationUrl + "/"+ registration.id);
  }

  public createRegistration(registration) {
    return this.http.post(this.registrationUrl, registration);
  }

}
