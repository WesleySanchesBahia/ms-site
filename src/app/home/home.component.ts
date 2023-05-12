import { Component, AfterViewInit, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, share, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements AfterViewInit {
  @ViewChild('myVideo') myVideo: ElementRef | undefined;
  private screenSizeSubject = new Subject<number>()
  screenSize$: Observable<boolean> | undefined
  active$: Observable<boolean> | undefined
  @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.screenSizeSubject.next(event.target.innerWidth);
  }
  isload: boolean = false;
  ngOnInit(): void {
    this.screenSize$ = this.screenSizeSubject.asObservable().pipe(
      startWith(window.innerWidth),
      debounceTime(200),
      distinctUntilChanged(),
      map(this.getScreenSize),
      share()
      );
    this.active$ = this.screenSizeSubject.asObservable().pipe(
      startWith(window.innerWidth),
      debounceTime(200),
      distinctUntilChanged(),
      map(this.getScreenSizeMobile),
      share()
      );
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


  getScreenSize(width: number): boolean {
    if (width < 576) {
      return false;
    } else if (width < 768) {
      return false;
    } else if (width < 992) {
      return false;
    } else if (width < 1200) {
      return true;
    } else {
      return true;
    }
  }
  getScreenSizeMobile(width: number): boolean {
    if (width < 576) {
      return true;
    } else if (width < 768) {
      return true;
    } else if (width < 992) {
      return false;
    } else if (width < 1200) {
      return false;
    } else {
      return false;
    }
  }
}
