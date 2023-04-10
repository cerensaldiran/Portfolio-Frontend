import { Component, OnInit } from '@angular/core';
import { WorkExperience } from 'src/app/models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit{
  workExpList:WorkExperience[]=[
    {
      role:'Intern',
      company:'Grandmedical Hospital',
      duration:'Feb 2019 - June 2019',
      description:[
        'Long term intern'
      ]
    },
    {
      role:'Software Developer',
      company:'VS Software ',
      duration:'Apr 2022 - continue',
      description:[
        'Worked with multiple teams to develop web applications',
        'Worked on different technologies such as (MVC, Dotnet, C#)'

      ]
    }
  ]
  constructor(){}

  ngOnInit(): void {
      
  }

}
