import { Component, OnInit,Input } from '@angular/core';
import { StudentAttendanceService } from '../student-attendance.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']

})
export class ItemComponent implements OnInit {
  @Input() student: any;
  saService: StudentAttendanceService;


  constructor(saService: StudentAttendanceService) {
    this.saService = saService;
  }

  ngOnInit(): void {

  }

  onAssign(status: any) {

    this.saService.onStatusChosen({name: this.student.name, status: status});
  }

}
