import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ListScreenComponent } from './screens/list-screen/list-screen.component';
import { UserDetailsComponent } from './screens/user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'drop-down-list', component: ListScreenComponent },
      { path: 'user-details', component: UserDetailsComponent },
      { path: '', redirectTo: 'drop-down-list', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
