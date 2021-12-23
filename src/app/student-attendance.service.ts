import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { LogService } from "./log.service";

@Injectable()

export class StudentAttendanceService {

  private students = [
    {name: 'Asif', status: ''},
    {name: 'Asif2',status: ''}

  ];
  private logService: LogService;
  studentsChanged = new Subject<void>();

  constructor(logService: LogService){
    this.logService = logService;
  }

  fetchStudents() {

  }

  getStudents(chosenList : any) {
    if (chosenList === 'all') {
      return this.students.slice();
    }
    return this.students.filter((char) => {
      return char.status === chosenList;
    })


  }

  onStatusChosen(studentInfo: any) {
    const pos =this.students.findIndex((char) => {
      return char.name === studentInfo.name;
    })
    this.students[pos].status = studentInfo.status;
    this.studentsChanged.next();
    this.logService.writeLog('changed status of ' + studentInfo.name + 'new status: ' + studentInfo.status);
    }
    addStudent(name: any, status: any) {
      const pos =this.students.findIndex((char) => {
        return char.name === name;
      })
      if (pos !== -1){
        return;
      }
      const newStud = {name: name, status: status};
      this.students.push(newStud);
    }
}
