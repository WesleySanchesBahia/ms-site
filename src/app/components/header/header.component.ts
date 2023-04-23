import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @ViewChild("header") header: ElementRef | undefined

  constructor(private render: Renderer2) {

  }
  @HostListener('window: scroll', ['$event']) onScrollEvent($event: any): void{
    const posicaoScroll = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if(posicaoScroll >= 1){
      this.render.setStyle(this.header?.nativeElement, 'background-color', ' rgba(62, 63, 147, 0.699)') 
    }
    if(posicaoScroll === 0){
  this.render.setStyle(this.header?.nativeElement, 'background-color', '#3e4095') 
    }
  }
}
