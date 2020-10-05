import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit {
  testimonyData = []
  constructor() { }

  ngOnInit(): void {
    this.testimonyData.push({
      testimonyImg: 'assets/images/person_1.jpg',
      testimonyLine: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      testimonyName: 'Garreth Smith',
      testimonyPosition: 'Marketing Manager'
    },{
    testimonyImg: 'assets/images/person_2.jpg',
      testimonyLine: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      testimonyName: 'Garreth Smith',
      testimonyPosition: 'Interface Designer'
    },{
      testimonyImg: 'assets/images/person_3.jpg',
      testimonyLine: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      testimonyName: 'Garreth Smith',
      testimonyPosition: 'UI Designer'
    },{
      testimonyImg: 'assets/images/person_4.jpg',
      testimonyLine: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      testimonyName: 'Garreth Smith',
      testimonyPosition: 'Web Developer'
    },{
      testimonyImg: 'assets/images/person_2.jpg',
      testimonyLine: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      testimonyName: 'Garreth Smith',
      testimonyPosition: 'System Analyst'
    }
    )
  }
}
