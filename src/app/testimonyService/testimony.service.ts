import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestimonyService {
  testimonyData = new Subject<any>();
  constructor() { }

  ngOnInit(): void {
    this.testimonyData.next([{
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
      testimonyImg: 'assets/images/person_5.jpg',
      testimonyLine: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      testimonyName: 'Garreth Smith',
      testimonyPosition: 'System Analyst'
    }]
    )
  }
}
