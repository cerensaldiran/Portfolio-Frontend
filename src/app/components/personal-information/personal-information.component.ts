import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit{
  myData:string[][]=[
    ['Name','Ceren Saldıran'],
    ['Date of Birth','08/07/1999'],
    ['Work Experience','1 year'],
    ['Education','Computer Engineering'],
  ];

  aboutMe: string[]=[
    'Hi, I am Ceren, a passionate and dedicated computer engineering student currently in my third year of studies.',
    'I have a strong academic background and a natural curiosity for problem-solving, which has fueled my drive to constantly seek out new knowledge and skills in the field of technology. I take pride in the software projects I have built in my free time.',
    'I enjoy exploring new technologies and programming languages, and I am excited about the future of computer engineering. I am confident that my passion for technology and my drive to succeed will make me a valuable asset in the field of computer engineering.'
  ]

  constructor(private breakpointObserver:BreakpointObserver){}

  ngOnInit(): void {
      
  }
}
