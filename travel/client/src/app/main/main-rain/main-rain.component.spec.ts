import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRainComponent } from './main-rain.component';

describe('MainRainComponent', () => {
  let component: MainRainComponent;
  let fixture: ComponentFixture<MainRainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainRainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
