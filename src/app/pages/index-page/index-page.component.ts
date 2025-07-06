import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.css'
})
export class IndexPageComponent implements OnInit, AfterViewInit {

  totalExperienceStartDate = new Date('2022-06-01');
  private isBrowser: boolean;

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

  educationData = [
    {
      institution: 'Veer Narmad South Gujarat University',
      degree: 'BCA (Bachelor of Computer Applications)',
      duration: 'Aug 2019 – Jul 2022',
      location: 'Surat',
      cgpa: 'CGPA :- 9.11'
    },
    {
      institution: 'Gujarat Secondary and Higher Secondary Education Board, Gandhinagar',
      degree: '12th (Sunflower English High School)',
      duration: 'Jun 2018 – Mar 2019',
      location: 'Surat',
      percentage: 'PERCENTILE :- 75.42'
    }
  ];

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

  articles = [
    {
      title: 'Build Your Own AI Agent in .NET with Semantic Kernel and a Local LLM',
      link: 'https://www.linkedin.com/pulse/build-your-own-ai-agent-net-semantic-kernel-local-llm-nandankar-lyanf/?trackingId=%2FHBMWW5WTdGw6h04j9rWkw%3D%3D',
      platform: 'LinkedIn',
      description: 'No OpenAI keys. No cloud dependency. Just pure local power.'
    },
    {
      title: 'Building My Own AI Agent: n8n, Docker, Local LLM & a Big Boost in Productivity',
      link: 'https://www.linkedin.com/pulse/building-my-own-ai-agent-n8n-docker-local-llm-big-boost-nandankar-ual0f/?trackingId=ozZO9yf7QaqMvacXXleZxA%3D%3D',
      platform: 'LinkedIn',
      description: 'A few days ago, I found myself juggling way too many repetitive dev tasks — writing boilerplate code, testing small functions, and switching between tools to get things done. So, I decided to do what we devs do best: automate it.'
    },
    {
      title: 'Exploring the Future with Model Context Protocol (MCP) and .NET 9',
      link: 'https://www.linkedin.com/pulse/exploring-future-model-context-protocol-mcp-net-9-gaurav-nandankar-zqrzc/?trackingId=M14DKYVERGOqWyVsR3Bu%2BA%3D%3D',
      platform: 'LinkedIn',
      description: 'Over the past few months, I\'ve been seeing a lot of buzz around Model Context Protocol (MCP) and for good reason.'
    },
    {
      title: 'Angular 17+ Fundamentals : Everything you need to know in one place',
      link: 'https://dev.to/gaurav-nandankar/angular-17-fundamentals-1ha8',
      platform: 'Dev.to',
      description: 'If you\'re here, you\'re probably already interested in learning Angular and want to dive right into the fundamentals.'
    },
    {
      title: 'How to Make API Calls in Android Using Kotlin',
      link: 'https://dev.to/gaurav-nandankar/how-to-make-api-calls-in-android-using-kotlin-mpd',
      platform: 'Dev.to',
      description: 'In modern mobile app development, integrating with RESTful APIs is a common task.'
    },
    {
      title: 'Reset Firebase User Password in C# Using Firebase SDK',
      link: 'https://dev.to/gaurav-nandankar/resetting-a-firebase-user-password-in-c-using-firebase-sdk-4p9g',
      platform: 'Dev.to',
      description: 'In this guide, we\'ll walk through the process of resetting a user\'s password in a C# application using the Firebase SDK.'
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    // Component initialization
  }

  ngAfterViewInit(): void {
    // Animations removed for clean design
  }
 
  getTotalExperience(): string {
    const now = new Date();
    const experience = this.calculateExperience(this.totalExperienceStartDate, now);

    return `${experience.years} years, ${experience.months} months, ${experience.days} days, ${experience.hours} hours, ${experience.minutes} minutes, ${experience.seconds} seconds`;
  }

  private calculateExperience(startDate: Date, endDate: Date): { years: number, months: number, days: number, hours: number, minutes: number, seconds: number } {
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    let days = endDate.getDate() - startDate.getDate();
    let hours = endDate.getHours() - startDate.getHours();
    let minutes = endDate.getMinutes() - startDate.getMinutes();
    let seconds = endDate.getSeconds() - startDate.getSeconds();

    if (seconds < 0) {
      minutes--;
      seconds += 60;
    }

    if (minutes < 0) {
      hours--;
      minutes += 60;
    }

    if (hours < 0) {
      days--;
      hours += 24;
    }

    if (days < 0) {
      months--;
      days += new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months, days, hours, minutes, seconds };
  }

  get totalExperience(): string {
    const now = new Date();
    const startDate = this.totalExperienceStartDate;
    const totalMonths = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    const totalYears = (totalMonths / 12).toFixed(1);
    return `${totalYears} years`;
  }

  open(position:number) {

    switch(position) {
      case 1 :
        window.open("https://www.linkedin.com/in/iamgaurav110/", '_blank');
        break

      case 2 :
        window.open("https://github.com/iamgauravn", '_blank');
        break
      
      case 3 :
        window.open('mailto:gaurav110dev@gmail.com', '_blank');
        break
      
      case 4 :
        window.open("https://stackoverflow.com/users/23102941/gaurav-nandankar", '_blank');
        break
      
      case 5 :
        window.open("https://dev.to/i_a_m_g_a_u_r_a_v", '_blank');
        break
    
      case 6 :
        window.open("https://dribbble.com/gaurav_dev", '_blank');
        break

      case 7 :
        window.open("https://drive.google.com/drive/folders/1F3NhdjbnylDbOKUrBrxb_UNpIdwmrBnu?usp=sharing", '_blank');
        break
          
    }

  }

}
