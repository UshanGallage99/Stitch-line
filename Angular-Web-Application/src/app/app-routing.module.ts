import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'; 
import {LoginComponent} from "./components/share/login/login.component";
import {SignUpComponent} from "./components/share/sign-up/sign-up.component";
import {ProfileComponent} from "./components/share/profile/profile.component";
import {AdminProfileComponent} from "./components/share/admin-profile/admin-profile.component";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent}, 
  {path: 'user', component: ProfileComponent}, 
  {path: 'admin', component: AdminProfileComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
