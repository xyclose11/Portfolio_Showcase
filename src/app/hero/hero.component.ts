import { Component } from '@angular/core';
import { TechnologyCardComponent } from "../technology-card/technology-card.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [TechnologyCardComponent, NgFor],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  constructor() {}

  ngOnInit() {}

  technologies: string[] = ['C#', ".NET", "ASP.NET Core", "JavaScript", "TypeScript", 'Java', 'Angular', 'React', 'SQL', 'Python'];

}
