import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './modules/customer/customer-list/customer-list.component';
import { UserListComponent } from './modules/user/user-list/user-list.component';

const routes: Routes = [

  // to explore lazy loading just comment/uncomment first two and other two routing.  and 
  //run command  ng build --configuration=production --stats-json
  // {path: 'customer-list', component: CustomerListComponent},
  // {path: 'user-list', component: UserListComponent},
  {
    path: 'customer-list', loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: 'user-list', loadChildren: ()=> import('./modules/user/user.module').then(m=> m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
