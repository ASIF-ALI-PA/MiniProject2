import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
