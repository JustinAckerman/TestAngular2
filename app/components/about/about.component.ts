import {Component, OnInit} from '@angular/core';
import {NgFor} from '@angular/common';
import {NameList} from '../../services/name_list.service';

@Component({
  moduleId: module.id,
  selector: 'about',
  styles: [
    `
      ul li a {
        color:blue;
        cursor:pointer;
      }
    `
  ],
  templateUrl: 'about.html',
  providers: [NameList]
})

export class AboutComponent {

  constructor(public list: NameList) {}

  addName(newName: string): boolean {

    this.list.add(newName);
    newName = '';

    // prevent default form submit behavior to refresh the page
    return false;
  }   
  
}
