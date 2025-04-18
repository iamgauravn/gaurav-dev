import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experienceData = [
    {
      company: 'CodeX Lancers',
      title: 'Software Engineer',
      duration: 'Nov 2023 – Present',
      location: 'Surat',
      description: 'I specialize in backend development, building robust .NET Web APIs, with contributions to frontend work in Angular and Android (Kotlin/Java). I manage client communications, gather requirements, mentor junior developers, and focus on API integration and performance optimization, ensuring industry-standard solutions.'
    },
    {
      company: 'Significant Infotech Pvt Ltd',
      title: 'Junior Software Developer',
      duration: 'Sep 2022 – Nov 2023',
      location: 'Surat',
      description: 'Designed, developed, and enhanced over 30 native apps, creating 15+ innovative and responsive apps from scratch while updating and optimizing features for more than 15 existing apps to ensure optimal performance and user satisfaction.'
    }
  ];
}
