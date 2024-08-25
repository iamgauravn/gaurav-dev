import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      const navigationEnd = event as NavigationEnd;
      console.log('Current URL:', navigationEnd.urlAfterRedirects); // Debugging line
      this.currentRoute = navigationEnd.urlAfterRedirects;
    });
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

  openEducation() {
    this.router.navigate(['education'])
  }

  openBlogs() {
    this.router.navigate(['blogs'])
  }

  isActive(route: string): boolean {
    console.log('Checking route:', route, 'Current route:', this.currentRoute); // Debugging line
    return this.currentRoute === route;
  }

}
