import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-technology-card',
  imports: [NgIf],
  templateUrl: './technology-card.component.html',
  styleUrl: './technology-card.component.scss'
})
export class TechnologyCardComponent {
  @Input() technology: string | undefined;
  @Input() icon: string = '';
}
