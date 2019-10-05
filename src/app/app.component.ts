import { Component } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hotel';
  
  ngOnInit() {
    AOS.init();
  }
}
