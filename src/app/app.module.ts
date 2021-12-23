import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { StudentAttendanceService } from './student-attendance.service';
import { LogService } from './log.service';
import { AddStudentComponent } from './add-student/add-student.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StudentAttendanceService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
