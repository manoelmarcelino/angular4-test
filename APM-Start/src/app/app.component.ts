import { Component } from  '@angular/core';

@Component ({
  selector: 'pm-root',
  template: `<div>
              <h1>{{ pagaTitle }}</h1> 
              <div><pm-products></pm-products></div>
            </div>`
})

export class AppComponent {
  pagaTitle: string = 'Manoel Product'
}