import { Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentAttendanceService } from '../student-attendance.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  students: any =[] ;
  activatedRoute: ActivatedRoute;
  saService: StudentAttendanceService;
  loadedStatus = 'all';
  subscription:any ;


  constructor(activatedRoute: ActivatedRoute, saService:StudentAttendanceService) {
    this.activatedRoute = activatedRoute;
    this.saService = saService;

   }



   studentStatus:any;


  ngOnInit(): void {
    this.saService.fetchStudents().subscribe((res)=>{
      console.log(res, "res==>");

      this.studentStatus = res.data;
    });
    this.activatedRoute.params.subscribe(
      (params:any)=>{
        this.students = this.saService.getStudents(params.stat);
        this.loadedStatus = params.status;

      }
    );
    this.subscription = this.saService.studentsChanged.subscribe(
      () => {
        this.students= this.saService.getStudents(this.loadedStatus);
      }
    );


  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();

  }



}
