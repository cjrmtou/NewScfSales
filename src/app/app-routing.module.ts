import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/customerlist', pathMatch: 'full' },
  { path: 'customerlist', component: CustomerListComponent },
  //{ path: 'requestform', component: RequestFormComponent },
  //{ path: 'requestlist-datatable', component: RequestListDatatableComponent },
  //{ path: 'requestdetail/:coi', component: RequestDetailComponent },
  //{ path: 'masteruserlist', component: MasterUserListComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
