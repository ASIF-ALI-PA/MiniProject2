import { Component, OnInit } from '@angular/core';
import { StudentAttendanceService } from '../student-attendance.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  students : any = [];
  chosenList = 'all';
  saService: StudentAttendanceService;


  constructor(saService: StudentAttendanceService) {
    this.saService = saService;
  }

  ngOnInit(){
  }
  onChoose(status: any) {
    this.chosenList = status;
  }

  getStudents() {

    this.students = this.saService.getStudents(this.chosenList);
    return this.students

  }




  }


