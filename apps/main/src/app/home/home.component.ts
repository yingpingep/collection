import { Component, OnInit } from '@angular/core';
import { ShowcaseService } from './showcase.service';

@Component({
  selector: 'collection-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ShowcaseService],
})
export class HomeComponent implements OnInit {
  constructor(public showcaseSrv: ShowcaseService) {}

  ngOnInit(): void {}
}
