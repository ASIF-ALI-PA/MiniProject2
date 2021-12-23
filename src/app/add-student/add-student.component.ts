import { Component, OnInit } from '@angular/core';
import { StudentAttendanceService } from '../student-attendance.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  availableStatus = [{display: 'None', value: ''},
  {display: 'Present', value: 'present'},
  {display: 'Absent', value: 'absent'}
 ]
 saService:StudentAttendanceService;
 defaultName = "Name??"

  constructor(saService:StudentAttendanceService) {
    this.saService = saService;

   }

  ngOnInit(): void {
  }
  onSubmit(submitted: any) {
    if (submitted.invalid){
      return;
    }
    console.log(submitted.value);
    this.saService.addStudent(submitted.value.name, submitted.value.status);

  }

}
