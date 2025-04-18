import { Component } from '@angular/core';

interface Article {
  title: string;
  link: string;
  platform: string;
  description: string;
}

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  blogPosts = [
    {
      title: 'My First Blog Post',
      platform: 'Medium',
      link: 'https://medium.com/@example/my-first-blog-post'
    },
    {
      title: 'My Second Blog Post',
      platform: 'LinkedIn',
      link: 'https://www.linkedin.com/pulse/my-second-blog-post-example'
    },
    {
      title: 'My Third Blog Post',
      platform: 'Dev.to',
      link: 'https://dev.to/example/my-third-blog-post'
    }
  ];

  articles: Article[] = [
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
      description: 'Over the past few months, I’ve been seeing a lot of buzz around Model Context Protocol (MCP) and for good reason.'
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
        window.open("https://stackoverflow.com/users/23102941/gaurav-nandankar?tab=answers&sort=newest", '_blank');
        break
      
      case 5 :
        window.open("https://dev.to/i_a_m_g_a_u_r_a_v", '_blank');
        break
    
      case 6 :
        window.open("https://dribbble.com/gaurav_dev", '_blank');
        break
          
    }
  }
}
