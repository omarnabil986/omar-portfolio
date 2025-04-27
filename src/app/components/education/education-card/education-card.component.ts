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
  imports: [MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationCardComponent {
  smallImagePath = input.required<string>();
  title = input.required<string>();
  subtitle = input.required<string>();
  description = input.required<string>();

  get titleImagePath() {
    return `assets/ ${this.smallImagePath}`;
  }
}
