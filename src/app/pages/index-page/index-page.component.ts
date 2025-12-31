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
      name: 'LinkPOS',
      description: 'A comprehensive fiscal receipt printing system integrating with government tax compliance systems (VSDC/E-SDC).',
      longDescription: 'LinkPOS is a mission-critical Point of Sale (POS) backend solution designed for high-volume retail environments requiring strict compliance with tax regulations. It integrates directly with government VSDC/E-SDC systems to cryptographically sign every transaction. Beyond compliance, it serves as a complete retail management engine handling complex transaction types including laybys, quotes, and credit notes.',
      features: [
        'Real-time tax compliance with VSDC/E-SDC integration',
        'Secure smart card & certificate-based authentication',
        'Support for complex transaction types: Layby, Quote, Return, Credit',
        'Generation of 9+ types of regulatory RDLC reports',
        'Offline capability with local buffering and sync'
      ],
      role: 'Lead Developer',
      challenges: 'Implementing the cryptographic signing protocol required precise byte-level manipulation and error handling to ensure 100% compliance without slowing down the checkout process.',
      technologies: '.NET, C#, WinForms, MSSQL, VSDC/E-SDC API, RDLC Reports, TaxCore Authentication',
      type: 'INDUSTRIAL',
      githubNote: 'GitHub link not available for INDUSTRIAL projects.'
    },
    {
      name: 'ProRanked',
      description: 'EV Charger Management System (CSMS) and ChargingService built on .NET microservices.',
      longDescription: 'ProRanked is a scalable Charging Station Management System (CSMS) built to manage electric vehicle charging infrastructure. It utilizes a microservices architecture to handle the separate concerns of charger communication (OCPP), billing, user management, and station health monitoring. The system ensures high availability and real-time control over charging sessions.',
      features: [
        'Microservices architecture for scalability',
        'Real-time charger status monitoring via SignalR',
        'Automated billing and payment processing',
        'Multi-tenant support for charging network operators',
        'Mobile app API for end-user control'
      ],
      role: 'Backend Architect',
      challenges: 'Orchestrating communication between thousands of chargers and the central server required highly optimized SignalR hubs and Redis caching to maintain low latency.',
      technologies: '.NET C#, Microservices, MSSQL, Entity Framework, Azure, Minio, Android, Angular, Redis, Docker, GithubWorkflow, Dapper, Coolify',
      type: 'INDUSTRIAL',
      githubNote: 'GitHub link not available for INDUSTRIAL projects.'
    },
    {
      name: 'Pancratium',
      description: 'An app designed to streamline project management by tracking employee hours and workflow efficiency.',
      longDescription: 'Pancratium is a sophisticated workforce management tool designed for organizations to track project hours and employee productivity. It moves beyond simple time-tracking by integrating workflow approval chains, project assignment logic, and detailed analytics for admins. It supports a multi-tenant architecture, allowing multiple organizations to use the platform securely.',
      features: [
        'Multi-tenant database architecture',
        'Automated timesheet approval workflows',
        'Real-time productivity dashboards',
        'Role-based access control (RBAC)',
        'Detailed exportable reporting'
      ],
      role: 'Full Stack Developer',
      challenges: ' designing a multi-tenant schema that ensured strict data isolation while allowing for shared efficient queries was a key architectural challenge.',
      technologies: '.NET C#, MSSQL, Entity Framework, Angular, Multi-Tenant, Docker, Github Workflow, Redis and Dapper',
      type: 'INDUSTRIAL',
      githubNote: 'GitHub link not available for INDUSTRIAL projects.'
    },
    {
      name: 'SutraPlus',
      description: 'The system streamlined inventory tracking, bill creation, and ledger management for import/export operations.',
      longDescription: 'SutraPlus is a comprehensive ERP module tailored for the specific needs of the import/export industry. It handles the entire lifecycle of goods from procurement to shipment, automating the generation of complex customs documentation and maintaining precise ledger records for international trade.',
      features: [
        'Automated customs documentation generation',
        'Multi-currency ledger management',
        'Real-time inventory tracking across warehouses',
        'Tax calculation and compliance reporting',
        'Integrated billing and invoicing'
      ],
      role: '.NET Developer',
      challenges: 'Mapping the complex and changing logic of international trade taxes into a reliable software model required extensive domain analysis and flexible code design.',
      technologies: '.NET C#, MSSQL, Entity Framework, ADO.NET, Angular',
      type: 'INDUSTRIAL',
      githubNote: 'GitHub link not available for INDUSTRIAL projects.'
    },
    {
      name: 'Semantic NIC Search API',
      description: 'High-performance Python FastAPI service for semantic search of National Industrial Classification codes.',
      longDescription: 'This API solves the problem of finding the correct National Industrial Classification (NIC) code for a business. Instead of relying on exact keyword matches, it uses a transformer-based LLM model to generate vector embeddings of the user\'s business description. It then performs a cosine similarity search against a vector database of NIC codes to find the conceptual match.',
      features: [
        'Semantic search using Sentence-Transformers (all-MiniLM-L6-v2)',
        'FastAPI for high-performance async endpoints',
        'Vector similarity matching',
        'Dockerized for easy deployment',
        'Scalable inference engine'
      ],
      role: 'AI Engineer',
      challenges: 'Optimizing the inference latency to remain under 200ms for real-time type-ahead search required careful tuning of the model hosting and vector search algorithm.',
      technologies: 'Python, FastAPI, Sentence-Transformers, Pandas, Scikit-learn, Uvicorn',
      githubLink: 'https://github.com/iamgauravn/semantic-nic-api',
      type: 'PERSONAL'
    },
    {
      name: 'AliPayIntegration',
      description: 'A robust .NET integration library for Alipay payment gateway handling payments and webhooks.',
      longDescription: 'AliPayIntegration is a plug-and-play .NET library designed to simplify the complex process of integrating Alipay\'s payment gateway. It abstracts the low-level signing, encryption, and HTTP communication details, providing developers with clean, strongly-typed methods for initiating payments, refunding transactions, and verifying webhook notifications.',
      features: [
        'Clean, strongly-typed .NET API',
        'Automatic RSA signature generation & verification',
        'Webhook (Async Notify) handling middleware',
        'Comprehensive error handling and logging',
        'Cross-platform compatibility (.NET Standard)'
      ],
      role: 'Library Author',
      challenges: 'Debugging the cryptographic signature verification against Alipay\'s sandbox was tricky due to strict encoding requirements and undocumented nuances in their API.',
      technologies: '.NET, C#, Alipay SDK, Cryptography',
      githubLink: 'https://github.com/iamgauravn/AliPayIntegration',
      type: 'PERSONAL'
    },
    {
      name: 'TaskIntel',
      description: 'AI-Powered Employee Activity Analytics Platform tracking productivity with SignalR and Gemini.',
      longDescription: 'TaskIntel is an ambitious experimental platform that combines real-time data ingestion with Generative AI analysis. It tracks developer activity (commits, active hours, tasks) and uses Google Gemini to generate qualitative productivity insights rather than just quantitative metrics. It features a live dashboard powered by SignalR.',
      features: [
        'AI-generated productivity summaries (Gemini)',
        'Real-time live dashboards (SignalR)',
        'Automated PDF report generation (Hangfire)',
        'Cross-platform mobile app (Flutter)',
        'Secure JWT authentication'
      ],
      role: 'Solo Developer',
      challenges: 'Integrating the streaming response from Gemini AI into a real-time SignalR feed required a complex async pipeline to ensure smooth UI updates.',
      technologies: '.NET 8, ASP.NET Core, SignalR, Entity Framework, Hangfire, Microsoft Semantic Kernel, Flutter, Dart, HTML5, CSS3, JavaScript, Chart.js, SQL Server, Hive, Google Gemini API, Docker, JWT',
      githubLink: 'https://github.com/iamgauravn/TaskIntel',
      type: 'PERSONAL'
    },
    {
      name: 'TeamsListener (DAMN JAM REVERSE)',
      description: 'Android app automating attendance tracking by monitoring Teams notifications with AI analysis.',
      longDescription: 'TeamsListener is a clever workaround automation tool for Android. It uses the NotificationListenerService API to intercept Microsoft Teams notifications on the device. It then parses these notifications to log start/stop times and uses Gemini AI to semantically understand if a message implies a break or a meeting.',
      features: [
        'Background service for notification interception',
        'Local room database for secure log storage',
        'AI-powered message intent classification',
        'battery-optimized background processing',
        'Automated email reporting'
      ],
      role: 'Mobile Developer',
      challenges: 'Android\'s aggressive background process killing required implementing a robust foreground service and persistent notification strategy to keep the listener alive.',
      technologies: 'Java, Android SDK, Room Database, Google Gemini API, Retrofit, OkHttp',
      githubLink: 'https://github.com/iamgauravn/DAMN-JAMN_REVERSE',
      type: 'PERSONAL'
    },
    {
      name: 'Ai-Based-Attendance-System',
      description: 'Face Recognition System made in Python using Tkinter and OpenCV for automated attendance.',
      longDescription: 'A classic computer vision project that replaces manual roll calls. It uses Haar Cascades for face detection and LBPH (Local Binary Patterns Histograms) for face recognition to identify registered students in real-time video feeds and mark their attendance automatically in a CSV/Excel backend.',
      features: [
        'Real-time Face Detection & Recognition',
        'GUI for student registration and training',
        'Automated CSV attendance logging',
        'Confidence score thresholding',
        'Lightweight deployment on local machines'
      ],
      role: 'Developer',
      challenges: 'Handling varying lighting conditions for recognition accuracy was the biggest hurdle, solved by preprocessing images with histogram equalization.',
      technologies: 'Python, Tkinter, OpenCV',
      githubLink: 'https://github.com/iamgauravn/Ai-Based-Attendance-System',
      type: 'PERSONAL'
    },
    {
      name: 'PallaraxWallpaper',
      description: 'Native Android app allowing users to set custom photos and videos as interactive wallpapers.',
      longDescription: 'PallaraxWallpaper gives users deep control over their Android home screen aesthetics. It enables setting videos as live wallpapers and applies parallax scrolling effects to static images, creating a depth perception effect that moves as the user tilts their phone.',
      features: [
        'Video to Live Wallpaper conversion',
        'Parallax 3D depth effect for images',
        'Battery-efficient rendering engine',
        'Simple, intuitive Material Design UI',
        'Local media picker and crop tools'
      ],
      role: 'Android Developer',
      challenges: 'Managing memory usage while rendering live video wallpapers to avoid crashing the launcher or draining the battery excessively.',
      technologies: 'Android',
      githubLink: 'https://github.com/iamgauravn/PallaraxWallpaper',
      type: 'PERSONAL'
    },
    {
      name: 'CodePulse',
      description: 'CodePulse is a blogging platform for developers to create, share, and read technical articles.',
      longDescription: 'CodePulse is a full-stack content platform built to demonstrate a clean Architecture. It features a rich text editor, image hosting, and a comment system. It serves as a reference implementation for connecting a strongly-typed Angular 17 frontend with a .NET 8 backend.',
      features: [
        'Rich Text Editor for article creation',
        'SEO-friendly URLs and meta tags',
        'Category and tag-based filtering',
        'Responsive layout for reading on any device',
        'JWT Authentication'
      ],
      role: 'Full Stack Developer',
      challenges: 'Implementing secure image uploads and serving them efficiently required careful configuration of static file middleware and CORS policies.',
      technologies: '.NET 8.0, Angular 17.3.0',
      githubLink: 'https://github.com/iamgauravn/codepluse',
      type: 'PERSONAL'
    },
    {
      name: 'data-export-console-app',
      description: 'C# console tool for exporting SQL database tables to PDF, CSV, and other formats.',
      longDescription: 'A developer utility tool designed to quickly dump SQL data. It connects to any MSSQL instance, inspects the schema, and allows the user to export query results into formatted PDF reports, CSV files for analysis, or RTF documents.',
      features: [
        'Dynamic schema inspection',
        'Support for PDF, CSV, TXT, and RTF export',
        'Connection string management',
        'Batch processing capability',
        'Interactive CLI interface'
      ],
      role: 'Developer',
      challenges: 'Generating well-formatted PDFs from dynamic tabular data required calculating column widths and page breaks programmatically.',
      technologies: 'C#, SQL',
      githubLink: 'https://github.com/iamgauravn/data-export-console-app',
      type: 'PERSONAL'
    },
    {
      name: 'manage-my-assets',
      description: 'A .NET MVC application to manage an organization\'s hardware resources effectively.',
      longDescription: 'An internal tool for IT departments to track hardware allocation. It maintains a database of assets (keyboards, mice, laptops), tracks who they are assigned to, and monitors their condition and warranty status.',
      features: [
        'Asset lifecycle tracking',
        'Employee assignment history',
        'Barcode/Serial number search',
        'Depreciation calculation',
        'Reporting dashboard'
      ],
      role: 'Web Developer',
      challenges: 'Designing a normalized database schema that could handle the many-to-many relationship of assets to employees over time.',
      technologies: '.NET MVC',
      githubLink: 'https://github.com/iamgauravn/manage-my-assets',
      type: 'PERSONAL'
    },
    {
      name: 'MINIO.NET',
      description: 'A .NET 8.0 Web API providing a SaaS-like image management solution similar to MinIO.',
      longDescription: 'MINIO.NET is a lightweight object storage server clone. It mimics the basic functionality of S3/MinIO, allowing users to create buckets (folders) and upload/retrieve objects via a REST API. It\'s useful for local development or simple self-hosted storage needs.',
      features: [
        'S3-compatible basic API structure',
        'Multi-user account management',
        'Secure file stream handling',
        'Metadata tagging for objects',
        'Simple folder-based persistence'
      ],
      role: 'Backend Developer',
      challenges: 'Handling large file uploads via streams in .NET Core without buffering the entire file into memory was critical for performance.',
      technologies: '.NET 8.0, Web API',
      githubLink: 'https://github.com/iamgauravn/MINIO.NET',
      type: 'PERSONAL'
    },
    {
      name: 'mcp_server',
      description: 'A simple C# implementation of a Model Context Protocol (MCP) server using .NET 9.',
      longDescription: 'This project creates a Model Context Protocol server in C#. It exposes "tools" and "resources" to AI agents, allowing them to interact with local code. It specifically implements a demo "monkey selling service" to test the MCP specification\'s capability for tool calling.',
      features: [
        'Implementation of MCP Specification',
        'Tool exposure to AI Agents',
        'Resource reading capabilities',
        '.NET 9 preview features usage',
        'JSON-RPC over Stdio transport'
      ],
      role: 'Research Developer',
      challenges: 'Understanding and implementing the brand-new MCP specification based on early documentation and TypeScript examples, translating them to idiomatic C#.',
      technologies: 'C#, .NET 9.0',
      githubLink: 'https://github.com/iamgauravn/mcp_server',
      type: 'PERSONAL'
    }
  ];

  /* UI Logic for Details & View More */
  selectedProject: any = null;
  showAllProjects: boolean = false;

  openProjectDetail(project: any) {
    this.selectedProject = project;
    // document.body.style.overflow = 'hidden'; // Lock scroll
  }

  closeProjectDetail() {
    this.selectedProject = null;
    // document.body.style.overflow = 'auto'; // Unlock scroll
  }

  openAllProjects() {
    this.showAllProjects = true;
    // document.body.style.overflow = 'hidden';
  }

  closeAllProjects() {
    this.showAllProjects = false;
    // document.body.style.overflow = 'auto';
  }

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

  projectsPart1: any[] = [];
  projectsPart2: any[] = [];
  articlesPart1: any[] = [];
  articlesPart2: any[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    // Split projects into two rows for the marquee effect
    const midPointProject = Math.ceil(this.projectData.length / 2);
    this.projectsPart1 = this.projectData.slice(0, midPointProject);
    this.projectsPart2 = this.projectData.slice(midPointProject);

    // Split articles into two rows
    const midPointArticle = Math.ceil(this.articles.length / 2);
    this.articlesPart1 = this.articles.slice(0, midPointArticle);
    this.articlesPart2 = this.articles.slice(midPointArticle);
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

  open(position: number) {

    switch (position) {
      case 1:
        window.open("https://www.linkedin.com/in/iamgaurav110/", '_blank');
        break

      case 2:
        window.open("https://github.com/iamgauravn", '_blank');
        break

      case 3:
        window.open('mailto:gaurav110dev@gmail.com', '_blank');
        break

      case 4:
        window.open("https://stackoverflow.com/users/23102941/gaurav-nandankar", '_blank');
        break

      case 5:
        window.open("https://dev.to/i_a_m_g_a_u_r_a_v", '_blank');
        break

      case 6:
        window.open("https://dribbble.com/gaurav_dev", '_blank');
        break

      case 7:
        window.open("https://drive.google.com/drive/folders/1F3NhdjbnylDbOKUrBrxb_UNpIdwmrBnu?usp=sharing", '_blank');
        break

    }

  }

}
