import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() collapsed = false ;
  @Input() screenWidth = 0;

  getBodyClass(): string {
    let styleCass = '';

    if (this.collapsed && this.screenWidth > 768){
      styleCass = 'body-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleCass = 'body-md-screen';
    }
    return  styleCass;
  }

}
