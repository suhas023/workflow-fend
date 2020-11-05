import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  @Input() items: ISidenavItem[] = [];
  @Output() itemClick: EventEmitter<ISidenavItem> = new EventEmitter();
  constructor(public sidenavService: SidenavService) {}

  ngOnInit(): void {}

  onItemClick(item: ISidenavItem) {
    if(item.callback)
      this.itemClick.emit(item);
  }
}

export interface ISidenavItem {
  name: string;
  data?: any;
  callback?: boolean;
}
