import { Component, AfterViewInit } from '@angular/core';
import { Slide } from './interface';

@Component({
  selector: 'app-show-slide',
  templateUrl: './show-slide.component.html',
  styleUrls: ['./show-slide.component.css']
})
export class ShowSlideComponent {
  images: Array<Slide> = [
    {
      img: "assets/image/pexels-darlene-alderson-4389890.jpg",
      titulo: "A internet em um piscar de olhos",
      subtitulo: "Prepare-se para acessar a internet sem interrupções e principalmente sem perda de tempo."
    },
    {
      img: "assets/image/pexels-karolina-grabowska-4467687.jpg",
      titulo: "Melhor custo e beneficio",
      subtitulo: `Além dos nossos planos serem acessíveis
      a instalação é <strong>gratuita</strong>.`
    },
    {
      img: "assets/image/pexels-kampus-production-8204313.jpg",
      titulo: "Suporte técnico",
      subtitulo: `Qualidade e agilidade de atendimento com equipe treinada para oferecer a melhor solução para você.`
    },
    {
      img: "assets/image/pexels-alena-darmel-7862592.jpg",
      titulo: "Qualidade em primeiro lugar",
      subtitulo: `Com a MSFIBRA você tem uma taxa absurda de upload para enviar fotos, vídeos e não ter aquela tela de carregamento chata ao enviar um arquivo.
      E dê adeus aos lags nos jogos online.`
    },
  ];
  apresentar: Slide | undefined;
  cont: number = 0;
  constructor() {

  }


  ngAfterViewInit(): void {
    const container = document.querySelector(".container")
    this.apresentar = this.images[0]
    this.cont++;
    setInterval(() => {
      if (this.cont <= 3) {
        container?.classList.add("active")
        this.apresentar = this.images[this.cont]
        this.cont++;
      } else {
        this.cont = 0;
      }

      setTimeout(() => {
        container?.classList.remove("active")
      }, 9000);
    }, 10000)
  }
}


