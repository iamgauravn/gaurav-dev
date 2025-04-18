import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {

  activeRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.url;
        if (typeof window !== 'undefined') {
          localStorage.setItem('activeRoute', this.activeRoute);
        }
      }
    });
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.activeRoute = localStorage.getItem('activeRoute') || '';
    }
  }

  openHome() {
    this.router.navigate(['']);
  }

  openProjects() {
    this.router.navigate(['projects']);
  }

  openExperience() {
    this.router.navigate(['experience']);
  }

  openEducation() {
    this.router.navigate(['education']);
  }

  openBlogs() {
    this.router.navigate(['blogs']);
  }
}
