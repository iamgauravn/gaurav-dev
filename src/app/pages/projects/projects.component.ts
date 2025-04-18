import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projectData = [
    {
      name: 'ProRanked',
      description: 'EV Charger Management System (CSMS) and ChargerService, built on .NET microservices, streamline EV charging operations with robust APIs for charger management, pricing, and payment processing.',
      technologies: '.NET C#, Microservices, MSSQL, Entity Framework, Azure, Minio, Android, Angular'
    },
    {
      name: 'TimeTrackingTool',
      description: 'An app designed to streamline project management by tracking employee hours. Enabled accurate project tracking and optimized workflow efficiency through an intuitive interface. Empowered controllers and admins with robust features for assigning projects, tracking progress, and approving hours.',
      technologies: '.NET C#, MSSQL, Entity Framework, Angular'
    },
    {
      name: 'SutraPlus',
      description: 'The system streamlined inventory tracking, bill creation, and ledger management for import/export operations. Provided real-time updates, automated documentation, and robust reporting features to enhance accuracy and workflow efficiency.',
      technologies: '.NET C#, MSSQL, Entity Framework, ADO.NET, Angular'
    }
  ];
}
