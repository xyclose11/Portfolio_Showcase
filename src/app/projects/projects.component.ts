import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Melin',
      description: 'An academic reference management applcaiton that allows users to create, edit, and delete references. Implemented PDF, and JSON parsing, alongside a custom barcode implementation that allows users to automatically scan a barcode and upload the reference data, using the mobile application. Also implemented sorting, filtering, tagging, grouping, user auth and searching functionality.',
      images: ['https://via.placeholder.com/150'],
      technologies: ['Angular', 'Ionic', 'Firebase'],
      github: 'https://github.com/xyclose11/Melin'
    },
    {
      title: 'Project 2',
      description: 'This is the description of project 2',
      images: ['https://via.placeholder.com/150'],
      technologies: ['Angular', 'Ionic', 'Firebase'],
      github: 'https://github.com/xyclose11/Melin'
    },
    {
      title: 'Project 3',
      description: 'This is the description of project 3',
      images: ['https://via.placeholder.com/150'],
      technologies: ['Angular', 'Ionic', 'Firebase'],
      github: 'https://github.com/xyclose11/Melin'
    }
  ];
}
