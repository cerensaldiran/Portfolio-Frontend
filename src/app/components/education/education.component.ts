import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
  educationList:Education[]=[
    {
      institute:'Celal Bayar University ',
      department:'Computer Programming',
      duration:'2017-2019',
      score:'3.26 '
    },
    {
      institute:'Celal Bayar University ',
      department:'Computer Engineering',
      duration:'2019-continue',
      score:'2.85 '
    },
  ];
  constructor(){}
  ngOnInit(): void {
      
  }

}
