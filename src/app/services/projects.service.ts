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
    ];
  }
}
