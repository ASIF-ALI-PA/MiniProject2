import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { StudentAttendanceService } from './student-attendance.service';
import { LogService } from './log.service';
import { AddStudentComponent } from './add-student/add-student.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RouterModule} from '@angular/router';


const routes = [
  { path: 'students',components: TabsComponent , children: [
    {path: '', redirectTo: 'all', pathMatch: 'full'},
    {path:':stat', component: ListComponent}
  ]},
  { path: 'new-student', component: AddStudentComponent },
  { path: '**', redirectTo: '/students' }
]

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    AddStudentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [StudentAttendanceService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
