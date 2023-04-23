import { Component, AfterViewInit, OnInit, Input } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM'; 3
import { Extent } from 'ol/extent';
import ZoomControl from 'ol/control/Zoom';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Circle, Fill, Stroke, Style } from 'ol/style';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements AfterViewInit {

  @Input() coords: any;
  map: any;
  countryExtent: Extent | undefined;
  constructor() {
  }

  ngOnInit(): void {
    // Coordenadas geográficas de Jandaia do Sul
    const jandaiaCoordinates = [-51.6444, -23.6017];
    const cambiraCoordinates = [-51.5846993, -23.5991381];
    const pirapoCoordinates = [-51.5384811, -23.5549527];



    // Crie um ponto de recurso usando as coordenadas de Jandaia do Sul
    const jandaiaPoint = new Point(fromLonLat(jandaiaCoordinates));
    const jandaiaFeature = new Feature({
      geometry: jandaiaPoint,
    });
    // Crie um ponto de recurso usando as coordenadas de Cambira
    const cambiraPoint = new Point(fromLonLat(cambiraCoordinates));
    const cambiraFeature = new Feature({
      geometry: cambiraPoint,
    });
    // Crie um ponto de recurso usando as coordenadas de Pirapo
    const pirapoPoint = new Point(fromLonLat(pirapoCoordinates));
    const pirapoFeature = new Feature({
      geometry: pirapoPoint,
    });

    // Defina o estilo do marcador (pin)
    const circleStyle = new Style({
      image: new Circle({
        radius: 50, // raio do círculo
        fill: new Fill({
          color: 'rgba(255, 255, 255, 0.4)', // cor de preenchimento do círculo
        }),
        stroke: new Stroke({
          color: '#3399CC', // cor da borda do círculo
          width: 2, // largura da borda do círculo
        }),
      }),
    });

    // Crie uma camada de vetores com o recurso da marcação (círculo)
    const circleLayer = new VectorLayer({
      source: new VectorSource({
        features: [jandaiaFeature, cambiraFeature, pirapoFeature],
      }),
      style: circleStyle,
    });

    // Crie o mapa e adicione a visualização e camadas
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        circleLayer,
      ],
      view: new View({
        center: fromLonLat(jandaiaCoordinates),
        zoom: 13,
      }),
    });


     // cria o controle de zoom e define a posição
     const zoomControl = new ZoomControl();
     map.removeControl(zoomControl);

  }

  ngAfterViewInit(): void {

  }



}


