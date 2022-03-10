import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // constructor(private router: Router) { }
  // constructor(private router: Router) { }
  // constructor(private router: Router) { }
  // constructor(private router: Router) { }
  dateTime!: Date;
  ngOnInit() {
   timer(0, 1000).subscribe(() => {
     this.dateTime = new Date()
   })
  }
}
