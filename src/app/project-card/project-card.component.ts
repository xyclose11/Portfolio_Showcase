import { Component, Input } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { TechnologyCardComponent } from '../technology-card/technology-card.component';
import { CommonModule } from '@angular/common';

export interface Project {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  github: string;
}

@Component({
  selector: 'app-project-card',
  imports: [TechnologyCardComponent, CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() project: Project | undefined;

  getCurrentImage() {
    return this.project?.images[0];
  }
}
