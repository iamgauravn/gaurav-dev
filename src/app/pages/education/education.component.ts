import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationData = [
    {
      institution: 'Veer Narmad South Gujarat University',
      degree: 'BCA (Bachelor of Computer Applications)',
      duration: 'Aug 2019 – Jul 2022',
      location: 'Surat',
      cgpa: 'CGPA :- 9.11'
    },
    {
      institution: 'Gujarat Secondary and Higher Secondary Education Board, Gandhinagar',
      degree: '12th (Sunflower English High School)',
      duration: 'Jun 2018 – Mar 2019',
      location: 'Surat',
      percentage: 'PERCENTILE :- 75.42'
    }
  ];
}
