
  import { Component } from '@angular/core';
    @Component({
      selector: 'app-menu',
      templateUrl: './menu.component.html'
    })
    export class MenuComponent {
      name: string;
      menuList: any;
      selected: any;
      constructor() {
        this.menuList = [{
          'name': 'Gravatar',
          'subMenu': ['Angular 1', 'Angular 2']
        }, {
          'name': 'Marvel',
          'subMenu': ['Jquery', 'Ajax']
        }];
      }
      select(item) {
        this.selected = (this.selected === item ? null : item);
      }
      isActive(item) {
        return this.selected === item;
      }
    }
