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
        imageUrl: 'assets/projects/Screenshot 2025-05-26 131152.png',
        name: 'Another Project',
        description: 'Another great app',
        techStack: ['Angular', 'RxJS', 'SCSS'],
        githubUrl: 'https://github.com/omarnabil986/Another-project',
      },
    ];
  }
}
