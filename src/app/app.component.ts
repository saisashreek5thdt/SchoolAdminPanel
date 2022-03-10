import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Admin-Panel';
  constructor(private router: Router){}
  openDashboard(){
    console.log("working")
    this.router.navigate(['/dashboard']);
  }
}
