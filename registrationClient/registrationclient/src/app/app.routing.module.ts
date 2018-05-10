import {RouterModule, Routes} from "@angular/router";
import {RegistrationComponent} from "./registration/registration.component";
import {AddRegistrationComponent} from "./registration/add-registration.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  { path: 'registrations', component: RegistrationComponent },
  { path: 'add', component: AddRegistrationComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

