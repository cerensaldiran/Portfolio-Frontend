import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
skills:Skill[]=[
  {
    name:'Angular',
    rating:70,
  },
  {
    name:'ASP.NET Core',
    rating:70,
  },
  {
    name:'Html, Css, Js',
    rating:80,
  },
  {
    name:'C#',
    rating:85,
  },
  {
    name:'ASP .NET MVC',
    rating:90
  }

]
  constructor(){}
  ngOnInit(): void {
      
  }

}
