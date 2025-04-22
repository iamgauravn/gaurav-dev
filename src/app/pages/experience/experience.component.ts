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
      description: 'I primarily focus on backend development, building robust .NET Web APIs, while also contributing to frontend development with Angular and Android (Kotlin/Java). In addition to technical development, I manage daily client communications, gather requirements, and translate them into actionable tasks. I also mentor junior developers, helping them grow and navigate challenges. I specialize in API integration, optimizing application performance, and ensuring all solutions meet industry standards.'
    },
    {
      company: 'Significant Infotech Pvt Ltd',
      title: 'Junior Software Developer',
      duration: 'Sep 2022 – Nov 2023',
      location: 'Surat',
      description: 'Designed and developed over 15 innovative, intuitive, and responsive native apps from scratch. Successfully updated and enhanced features for more than 10 existing apps, ensuring optimal performance and user satisfaction.'
    },
    {
      company: 'Significant Infotech Pvt Ltd',
      title: 'Intern Software Developer',
      duration: 'June 2022 – August 2022',
      location: 'Surat',
      description: 'During training, designed and contributed to the development of multiple innovative and responsive native apps, demonstrating a strong commitment to continuous learning and growth. Actively collaborated in updating existing apps to improve features and optimize performance under mentorship.'
    }
  ];
}
