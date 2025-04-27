import { Component } from '@angular/core';
import { EducationCardComponent } from './education-card/education-card.component';

@Component({
  selector: 'app-education',
  imports: [EducationCardComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {}
