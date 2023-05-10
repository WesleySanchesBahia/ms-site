import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements AfterViewInit {
  @ViewChild('myVideo') myVideo: ElementRef | undefined;

  isload: boolean = false;
  ngOnInit(): void {


  }

  ngAfterViewInit(): void {

    Promise.resolve().then(() => {
      setTimeout(() => {
        const videoElement = this.myVideo?.nativeElement;
        videoElement.controls = false;
        videoElement.currentTime = 10
        videoElement.addEventListener('ended', () => {
          videoElement.play();
        });
      }, 800);
    })


    setTimeout(() => {
      this.isload = true;
    }, 500);
  }
}
