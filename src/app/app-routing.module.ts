import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { MaterialModule } from './material/material.module';
import { IsLoggedCanActiveService } from './services/is-logged-can-active.service';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [IsLoggedCanActiveService] },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'transaction', component: TransactionComponent, canActivate: [IsLoggedCanActiveService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MaterialModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
