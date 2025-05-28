import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  name = input<string>();
  description = input<string>();
  techStack = input<string[]>();
  imageUrl = input<string>();
  githubUrl = input<string | undefined>();
  liveDemoUrl = input<string | undefined>();
}
