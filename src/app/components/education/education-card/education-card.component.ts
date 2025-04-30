import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrl: './education-card.component.scss',
  imports: [MatCardModule, MatButtonModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationCardComponent {
  logoImagePath = input.required<string>();
  mainImagePath = input.required<string>();
  title = input.required<string>();
  subtitle = input.required<string>();
  description = input.required<string>();

  get logoUrl() {
    return `assets/${this.logoImagePath()}`;
  }

  get bigImagePath() {
    return `assets/${this.mainImagePath()}`;
  }
}
