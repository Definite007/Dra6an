import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'War6an';

  constructor() {

  }

  addClass(key:string) {
    console.log(key)
    let links = document.getElementsByClassName('nav-link')
    console.log(links.length);
    for(let i=0;i<links.length;i++){
      links[i].classList.remove('active')
      if (links[i].getAttribute('ng-reflect-router-link') == key){
        links[i].classList.add('active')
      }
    }
  }
}
