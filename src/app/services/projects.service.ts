import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  getProjects(): Project[] {
    return [
      {
        imageUrl: 'assets/projects/Screenshot 2025-05-26 131152.png',
        name: 'Task Management App',
        description: 'Enterprise-level task management without friction',
        techStack: ['Angular', 'TypeScript', 'HTML', 'CSS'],
        githubUrl:
          'https://github.com/omarnabil986/Tasks-management-app-Angular',
        liveDemoUrl: 'https://ng-deployment-example-be768.web.app/',
      },
      {
        imageUrl: 'assets/projects/Screenshot 2025-05-26 142103.png',
        name: 'Natours',
        description: 'Nature tours website with a modern design',
        techStack: ['HTML', 'SCSS'],
        githubUrl:
          'https://github.com/omarnabil986/Advance-CSS-Sass-Projects/tree/main/Natours',
        liveDemoUrl: 'https://natours-omar.netlify.app/',
      },
      {
        imageUrl:
          'assets/projects/Gemini_Generated_Image_ahmw9kahmw9kahmw.jpeg',
        name: 'Product Management App',
        description: 'Manage products with ease and efficiency',
        techStack: ['MongoDB', 'Express.js', 'Angular', 'Node.js'],
        githubUrl: 'https://github.com/omarnabil986/product-management-app',
      },
      {
        imageUrl: 'assets/projects/Library.jpeg',
        name: 'Library Management System',
        description: 'A comprehensive library management system',
        techStack: ['ASP.NET Core', 'C#', 'EF Core', 'SQL Server'],
        githubUrl: 'https://github.com/mazenaym/Library',
      },
      {
        imageUrl: 'assets/projects/guessMyNumber.png',
        name: 'Guess My Number Game',
        description: 'A fun number guessing game built with javascript',
        techStack: ['JavaScript', 'HTML', 'CSS'],
        githubUrl:
          'https://github.com/omarnabil986/JavaScript-projects/tree/main/Guess-My-Number',
        liveDemoUrl: 'https://guess-my-number-omar.netlify.app/',
      },
      {
        imageUrl: 'assets/projects/Mapty.png',
        name: 'Mapty App',
        description: 'Activity Logging Web Application',
        techStack: ['JavaScript', 'HTML', 'CSS'],
        githubUrl:
          'https://github.com/omarnabil986/JavaScript-projects/tree/main/Mapty',
        liveDemoUrl: 'https://mapty-omar.netlify.app/',
      },
    ];
  }
}
