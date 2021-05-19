import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoDetailsComponent } from './components/components/crypto-details/crypto-details.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'crypto/:id', component: CryptoDetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
