import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Melin',
      description:
        'An academic reference management applcaiton that allows users to create, edit, and delete references. Implemented PDF, and JSON parsing, alongside a custom barcode implementation that allows users to automatically scan a barcode and upload the reference data, using the mobile application. Also implemented sorting, filtering, tagging, grouping, user auth and searching functionality.',
      images: ['images/Melin.png'],
      technologies: ['Angular', 'Ionic', 'Firebase'],
      github: 'https://github.com/xyclose11/Melin',
    },
    {
      title: 'MESS',
      description: 'This is the description of project 2',
      images: ['images/ProductionLogFailure.png'],
      technologies: ['Angular', 'Ionic', 'Firebase'],
      github: 'https://github.com/SensitTechnologies/MESS',
    },
    {
      title: 'Project 3',
      description: 'This is the description of project 3',
      images: [
        'https://placehold.co/600x400/EEE/31343C?font=montserrat&text=Images Coming Soon...',
      ],
      technologies: ['Angular', 'Ionic', 'Firebase'],
      github: 'https://github.com/xyclose11/cashmoneycitations',
    },
    {
      title: 'Project 3',
      description: 'This is the description of project 3',
      images: ['images/Rotate.png'],
      technologies: ['Angular', 'Ionic', 'Firebase'],
      github: 'https://github.com/xyclose11/Paint',
    },
  ];
}
