import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdmindashboardComponent,
  },
  {
    path: 'admindashboard',
    component: AdmindashboardComponent,
  },
  {
    path: 'student-list',
    component: StudentListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
