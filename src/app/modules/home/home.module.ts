import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ListScreenComponent } from './screens/list-screen/list-screen.component';
import { UserDetailsComponent } from './screens/user-details/user-details.component';

@NgModule({
  declarations: [HomeComponent, ListScreenComponent, UserDetailsComponent],
  imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule, FormsModule],
})
export class HomeModule {}
