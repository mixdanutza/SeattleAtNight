import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRecommendationComponent } from './main-recommendation.component';

describe('MainRecommendationComponent', () => {
  let component: MainRecommendationComponent;
  let fixture: ComponentFixture<MainRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
