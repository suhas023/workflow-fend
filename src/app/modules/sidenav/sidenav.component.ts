import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  @Input() items: ISidenavItem[] = [];
  @Input() selected: string = '';
  @Output() onClick: EventEmitter<ISidenavItem> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}

export interface ISidenavItem {
  name: string;
  data?: any;
}
