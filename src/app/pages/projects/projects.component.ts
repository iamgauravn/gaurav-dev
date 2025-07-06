import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projectData = [
    {
      name: 'TaskIntel',
      description: 'AI-Powered Employee Activity Analytics Platform - A comprehensive full-stack analytics platform designed to track, analyze, and optimize employee productivity through AI-driven insights. Features real-time activity tracking with SignalR, AI-powered analytics using Google Gemini, comprehensive dashboard with interactive visualizations, and automated PDF reporting. Built as a weekend project exploring AI and workplace analytics.',
      technologies: '.NET 8, ASP.NET Core, SignalR, Entity Framework, Hangfire, Microsoft Semantic Kernel, Flutter, Dart, HTML5, CSS3, JavaScript, Chart.js, SQL Server, Hive, Google Gemini API, Docker, JWT',
      githubLink: 'https://github.com/iamgauravn/TaskIntel',
      type: 'PERSONAL'
    },
    {
      name: 'ProRanked',
      description: 'EV Charger Management System (CSMS) and ChargerService, built on .NET microservices, streamline EV charging operations with robust APIs for charger management, pricing, and payment processing.',
      technologies: '.NET C#, Microservices, MSSQL, Entity Framework, Azure, Minio, Android, Angular, Redis, Docker, GithubWorkflow, Dapper, Coolify',
      type: 'INDUSTRIAL',
      githubNote: 'GitHub link not available for INDUSTRIAL projects.'
    },
    {
      name: 'Pancratium',
      description: 'An app designed to streamline project management by tracking employee hours. Enabled accurate project tracking and optimized workflow efficiency through an intuitive interface. Empowered controllers and admins with robust features for assigning projects, tracking progress, and approving hours.',
      technologies: '.NET C#, MSSQL, Entity Framework, Angular, Multi-Tenant, Docker, Github Workflow, Redis and Dapper',
      type: 'INDUSTRIAL',
      githubNote: 'GitHub link not available for INDUSTRIAL projects.'
    },
    {
      name: 'SutraPlus',
      description: 'The system streamlined inventory tracking, bill creation, and ledger management for import/export operations. Provided real-time updates, automated documentation, and robust reporting features to enhance accuracy and workflow efficiency.',
      technologies: '.NET C#, MSSQL, Entity Framework, ADO.NET, Angular',
      type: 'INDUSTRIAL',
      githubNote: 'GitHub link not available for INDUSTRIAL projects.'
    },
    {
      name: 'Ai-Based-Attendance-System',
      description: 'Face Recognition System made in Python using Tkinter and OpenCV where we can add students data and train them to take attendance by just scanning their face and generate report.',
      technologies: 'Python, Tkinter, OpenCV',
      githubLink: 'https://github.com/iamgauravn/Ai-Based-Attendance-System',
      type: 'PERSONAL'
    },
    {
      name: 'PallaraxWallpaper',
      description: 'Introducing Wallpaper Maker: Personalize Your Android Device Like Never Before! Are you tired of looking at the same old wallpaper on your Android device? Do you wish you could truly make your phone or tablet reflect your personality and style? Look no further! Presenting My Custom Wallpaper, a native Android application designed to empower you to set your own photos and videos as your device\'s wallpaper effortlessly. With My Custom Wallpaper, you have the freedom to break free from the limitations of preloaded wallpapers and express yourself in a truly unique way. Let your creativity shine by setting your favorite memories, breathtaking landscapes, or even hilarious videos as your device\'s wallpaper. The possibilities are endless! So, why settle for generic wallpapers that fail to capture your individuality? Elevate your Android device\'s aesthetics with My Custom Wallpaper and let your imagination run wild.',
      technologies: 'Android',
      githubLink: 'https://github.com/iamgauravn/PallaraxWallpaper',
      type: 'PERSONAL'
    },
    {
      name: 'CodePulse',
      description: 'CodePulse is a web application built with a .NET 8.0 backend and an Angular 17.3.0 frontend. It enables users to create, share, and read blog posts, connecting people with similar interests.',
      technologies: '.NET 8.0, Angular 17.3.0',
      githubLink: 'https://github.com/iamgauravn/codepluse',
      type: 'PERSONAL'
    },
    {
      name: 'data-export-console-app',
      description: 'This C# console application is designed for exporting data from a specified SQL database table into various file formats, including PDF, TXT, CSV, and RTF. The application provides an interactive user experience, allowing users to input database connection details and select a table for export.',
      technologies: 'C#, SQL',
      githubLink: 'https://github.com/iamgauravn/data-export-console-app',
      type: 'PERSONAL'
    },
    {
      name: 'manage-my-assets',
      description: 'A .NET MVC application to manage an organization\'s hardware resources, such as keyboards and mice.',
      technologies: '.NET MVC',
      githubLink: 'https://github.com/iamgauravn/manage-my-assets',
      type: 'PERSONAL'
    },
    {
      name: 'MINIO.NET',
      description: 'A .NET 8.0 Web API (UPLOAD.NET) providing a SaaS-like image management solution. It allows users to create accounts, log in, upload images, and retrieve all uploaded images, similar to MinIO.',
      technologies: '.NET 8.0, Web API',
      githubLink: 'https://github.com/iamgauravn/MINIO.NET',
      type: 'PERSONAL'
    },
    {
      name: 'mcp_server',
      description: 'A simple C# implementation of a Model Context Protocol (MCP) server using .NET 9, demonstrating how to create an MCP server with basic monkey and selling services.',
      technologies: 'C#, .NET 9.0',
      githubLink: 'https://github.com/iamgauravn/mcp_server',
      type: 'PERSONAL'
    }
  ];
}
