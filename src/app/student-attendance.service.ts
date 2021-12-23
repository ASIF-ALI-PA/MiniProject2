import { Injectable } from "@angular/core";
import { LogService } from "./log.service";

@Injectable()

export class StudentAttendanceService {

  students = [
    {name: 'Asif', status: ''},
    {name: 'Asif2', status: ''},

  ];
  private logService: LogService;

  constructor(logService: LogService){
    this.logService = logService;
  }

  getStudents(chosenList : any) {
    if (chosenList === 'all') {
      return this.students.slice();
    }
    return this.students.filter((char) =>{
      return char.status === chosenList;
    })


  }

  onStatusChosen(studentInfo: any) {
    const pos =this.students.findIndex((char: { name: any; }) => {
      return char.name === studentInfo.name;
    })
    this.students[pos].status = studentInfo.status;
    this.logService.writeLog('changed status of ' + studentInfo.name + 'new status: ' + studentInfo.status);
    }
}
