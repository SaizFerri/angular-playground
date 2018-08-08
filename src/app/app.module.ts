import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menubar/menubar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { UsersService } from './services/users.service';
import { VerifyComponent } from './components/verify/verify.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { VerifyBarComponent } from './components/verify-bar/verify-bar.component';
import { AuthGuard } from './services/auth-guard.service';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { AdminModule } from './admin/admin.module';
import { environment } from '../environments/environment';
import { MetarService } from './services/metar.service';

export function getToken() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProtectedComponent,
    VerifyComponent,
    ResetPasswordComponent,
    NewPasswordComponent,
    VerifyBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken,
        whitelistedDomains: environment.whiteListedDomains
      }
    })
  ],
  providers: [AuthService, UsersService, MetarService, AuthGuard, AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
