import { NgModule } from "@angular/core";
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { RouterModule } from "@angular/router";
const routes = [
  { path: 'students',components: TabsComponent , children: [
    {path: '', redirectTo: 'all', pathMatch: 'full'},
    {path:':stat', component: ListComponent}
  ]},
  { path: 'new-student', component: AddStudentComponent },
  { path: '**', redirectTo: '/students' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]


})
export class AppRoutingModule {}
