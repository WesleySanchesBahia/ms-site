import { Component, AfterViewInit, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements AfterViewInit {
  @ViewChild('contentParcialApucarana') parcialApucarana: TemplateRef<any> | undefined
  @ViewChild('contentParcialCambira') parcialCambira: TemplateRef<any> | undefined
  @ViewChild('contentCompleta') completa: TemplateRef<any> | undefined

  constructor() {
  }


  ngAfterViewInit(): void {
    let map = document.querySelectorAll("path");


    map.forEach((elemento, index) => {
      elemento.addEventListener("mouseover", (event) => {
        if(index != 8){
          elemento.setAttribute("class", "hover str0");
        }
      });

      elemento.addEventListener("mouseout", () => {
        if(index != 8){
          elemento.setAttribute("class", "fill str0");
        }
      });
    });
  }
  show: boolean = false;
  content: any;
  tooltipText: string = "";
  tooltipStyle: any = {};

  showTooltip(event: MouseEvent, text: string) {

    if(text === 'Apucarana'){
      this.tooltipText = text
      this.content = this.parcialApucarana
      this.tooltipoPosition(event)
    }
    if(text === 'Novo Itacolomi'){
      this.tooltipText = text
      this.content = this.completa
      this.tooltipoPosition(event)

    }
    if(text === 'Marumbi'){
      this.tooltipText = text
      this.content = this.completa
      this.tooltipoPosition(event)

    }
    if(text === 'Kaloré'){
      this.tooltipText = text
      this.content = this.completa
      this.tooltipoPosition(event)
      this.tooltipoPosition(event)


    }
    if(text === 'Cambira'){
      this.tooltipText = text
      this.content = this.completa
      this.tooltipoPosition(event)

    }
    if(text === 'Jandaia do Sul'){
      this.tooltipText = text
      this.content = this.completa
      this.tooltipoPosition(event)

    }
    if(text === 'Mandaguari'){
      this.tooltipText = text;
      this.content = this.completa;
      if(window.innerWidth >= 1024){
        this.tooltipStyle = {
          visibility: 'visible',
          top: event.offsetY-130 + 'px',
          left: event.offsetX+50 + 'px'
        };
      } else {
        this.tooltipStyle = {
          visibility: 'visible',
          top: event.offsetY-150 + 'px',
          left: event.offsetX+120 + 'px'
        };
      }
    }
    this.show = true;
  }

  hideTooltip() {
    this.show = false;
  }


  tooltipoPosition(event:any){
    if(window.innerWidth >= 1024){
      this.tooltipStyle = {
        visibility: 'visible',
        top: event.offsetY-100 + 'px',
        left: event.offsetX+50 + 'px'
      };
    }else {
      this.tooltipStyle = {
        visibility: 'visible',
        top: event.offsetY-150 + 'px',
        left: event.offsetX-120 + 'px'
      };
    }
  }

}


