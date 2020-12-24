import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Case } from '../showcase.service';

@Component({
  selector: 'collection-demo-card',
  templateUrl: './demo-card.component.html',
  styleUrls: ['./demo-card.component.scss'],
})
export class DemoCardComponent implements OnInit {
  @Input() case: Case;
  @Output() liveDemoClick = new EventEmitter<string>();
  @Output() shareClick = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
}
