import { Component, ElementRef, HostListener, Renderer2, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, share, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild("header") header: ElementRef | undefined

  screenSize$: Observable<boolean> | undefined
  isMenuOpen = false;
  private screenSizeSubject = new Subject<number>()
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

  @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.screenSizeSubject.next(event.target.innerWidth);
  }


  ngOnInit() {
    this.screenSize$ = this.screenSizeSubject.asObservable().pipe(
    startWith(window.innerWidth),
    debounceTime(200),
    distinctUntilChanged(),
    map(this.getScreenSize),
    share()
    );
  }


  ngAfterViewInit(): void {

  }


  planos(): void {
    const element = document.getElementById("planos");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
  cobertura(): void {
    const element = document.getElementById("cobertura");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  contatos(): void {
    const element = document.getElementById("contatos");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }


  getScreenSize(width: number): boolean {
    if (width < 576) {
      return false;
    } else if (width < 768) {
      return false;
    } else if (width < 992) {
      return true;
    } else if (width < 1200) {
      return true;
    } else {
      return true;
    }
  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
