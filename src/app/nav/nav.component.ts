import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  constructor(private router : Router) {

  }

  
  openHome() {
    this.router.navigate([''])
  }

  openProjects() {
    this.router.navigate(['projects'])
  }

  openExperience() {
    this.router.navigate(['experience'])
  }


}
