import { Component, OnInit } from '@angular/core';
import { IntroMedia } from './media';

@Component({
  selector: 'intro-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit {
  mediaList: IntroMedia[] = [
    {
      target: 'GitHub',
      link: 'https://github.com/yinnping',
      icon: '/assets/intro/github.svg',
    },
    {
      target: 'LinkedIn',
      link: 'https://www.linkedin.com/in/yingping-lin-ep/',
      icon: '/assets/intro/linkedin.svg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
