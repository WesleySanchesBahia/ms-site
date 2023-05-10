import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipoComponent } from './tooltipo.component';

describe('TooltipoComponent', () => {
  let component: TooltipoComponent;
  let fixture: ComponentFixture<TooltipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooltipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
