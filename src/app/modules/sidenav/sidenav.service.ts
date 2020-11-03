import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  selected: string = "";
  constructor() { }
}
