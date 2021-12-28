import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';

import { Observable, Subject } from "rxjs";
import { LogService } from "./log.service";

@Injectable()

export class StudentAttendanceService {

  private students = [
    {name: 'Asif', status: ''},
    {name: 'Asif2',status: ''}

  ];
  private logService: LogService;
  studentsChanged = new Subject<void>();




  constructor(logService: LogService , private _http:HttpClient){
    this.logService = logService;


  }
  //connect frontend to backend

 apiUrl = 'http://localhost:3000/attendancelogger/';

  //get all data

  fetchStudents():Observable<any> {
    return this._http.get(`${this.apiUrl}`);



  }

  // add student
  postStudents(data:any):Observable<any>
  {
    console.log(data,'postapi=> ');
    return this._http.post(`${this.apiUrl}`, data);

  }

  //update student

  updateStudent(data:any,id:any):Observable<any>
  {
    let ids =id;
    return this._http.put(`${this.apiUrl}/${id}` ,data );
  }

  getStudents(chosenList : any) {
    if (chosenList === 'all') {
      return this.students.slice();
    }
    return this.students.filter((char) => {
      return char.status === chosenList;
    })


  }
//to set status of a student

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
