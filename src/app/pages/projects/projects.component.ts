import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  industryProjects = [
    {
      name: 'CSMS: EV Charger Management System',
      description: 'A Charging Station Management System (CSMS) is a platform that manages multiple electric vehicle (EV) charging stations. CSMS software uses open protocols to communicate with charging stations to view and manage their status and data. CSMS can also be called a CPO platform, EV Charging Management Solution, or Chargepoint Management System.',
      technologies: '.NET C#, Android (Kotlin), Micro-Service, MSSQL, Entity Framework',
      githubLink: 'https://github.com/example/csms',
      liveLink: null
    },
    {
      name: 'TimeTrackingTool',
      description: 'An app designed to streamline project management by tracking employee hours. Enabled accurate project tracking and optimized workflow efficiency through an intuitive interface. Empowered controllers and admins with robust features for assigning projects, tracking progress, and approving hours.',
      technologies: '.NET C#, Angular, MSSQL, Entity Framework',
      githubLink: null,
      liveLink: null
    },
    {
      name: 'SutraPlus',
      description: 'The system streamlined inventory tracking, bill creation, and ledger management for import/export operations. Provided real-time updates, automated documentation, and robust reporting features to enhance accuracy and workflow efficiency.',
      technologies: 'Angular, .NET C#, MSSQL, Entity Framework, ADO.NET',
      githubLink: null,
      liveLink: 'https://sutraplus.com'
    },
    {
      name: 'ISA: Indian Society of Anesthesiology',
      description: 'ISA is a dynamic platform that simplifies membership management for the Indian Society of Anesthesiology. It allows members to easily apply and join from anywhere in India. The system automates the membership process, including application, verification, and approval, streamlining operations and enhancing user experience.',
      technologies: '.NET C#, Angular, MSSQL, Entity Framework',
      githubLink: 'https://github.com/example/isa',
      liveLink: 'https://isa.com'
    }
  ];

  personalProjects = [
    {
      name: 'Personal Project 1',
      description: 'Description of personal project 1.',
      technologies: 'Technologies used',
      githubLink: null,
      liveLink: null
    }
  ];
}
