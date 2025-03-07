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
        'An academic reference management application, designed to help users manage and organize their academic references efficiently.',
      images: ['images/MelinHomePage.png'],
      technologies: [
        'ASP.NET Core',
        'C#',
        'React.js',
        'TypeScript',
        'Jenkins',
        'PostgreSQL',
        'HTML/CSS',
        'Docker',
        'Nginx',
        'xUnit',
      ],
      github: 'https://github.com/xyclose11/Melin',
    },
    {
      title: 'MESS',
      description:
        'Engineered a Manufacturing Execution System Software for a local manufacturing company, enabling real-time tracking and analysis of product progress through the manufacturing process.',
      images: ['images/ProductionLogFailure.png'],
      technologies: [
        'ASP.NET Core',
        'C#',
        'Blazor',
        'MSSQL',
        'JavaScript',
        'EF Core',
        'Jenkings',
        'Nginx',
        'Visual Studio',
      ],
      github: 'https://github.com/SensitTechnologies/MESS',
    },
    {
      title: 'Citation Generator',
      description:
        'Built a student facing citation generation full-stack web application, to import, export, and generate citations securely.',
      images: [
        'https://placehold.co/600x400/EEE/31343C?font=montserrat&text=Images Coming Soon...',
      ],
      technologies: [
        'TypeScript',
        'Node.js',
        'HTML/CSS',
        'Next.js',
        'MongoDB',
        'Apache',
      ],
      github: 'https://github.com/xyclose11/cashmoneycitations',
    },
    {
      title: 'Paint',
      description:
        'Created a custom image manipulation tool based on the popular Microsoft Paint.',
      images: ['images/Rotate.png'],
      technologies: ['Java', 'JavaFX', 'JUnit', 'UML', 'Maven'],
      github: 'https://github.com/xyclose11/Paint',
    },
  ];
}
