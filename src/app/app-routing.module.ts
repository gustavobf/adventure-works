import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdventureWorksComponent } from './adventure-works/adventure-works/adventure-works.component';

const routes: Routes = [
  { path: "", redirectTo: "works", pathMatch: "full" },
  { path: 'works', component: AdventureWorksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
