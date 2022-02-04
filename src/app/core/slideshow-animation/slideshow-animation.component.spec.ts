import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowAnimationComponent } from './slideshow-animation.component';

describe('SlideshowAnimationComponent', () => {
  let component: SlideshowAnimationComponent;
  let fixture: ComponentFixture<SlideshowAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideshowAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideshowAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
