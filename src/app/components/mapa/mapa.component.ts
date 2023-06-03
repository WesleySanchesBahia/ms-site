import { Component, AfterViewInit, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements AfterViewInit {


  constructor() {
  }


  ngAfterViewInit(): void {
    let map = document.querySelectorAll("path");


    map.forEach((elemento, index) => {
      elemento.addEventListener("mouseover", () => {
        if(index != 0){
          elemento.setAttribute("class", "hover str0");
        }
      });

      elemento.addEventListener("mouseout", () => {
        if(index != 0){
          elemento.setAttribute("class", "fill str0");
        }
      });
    });
  }


}


