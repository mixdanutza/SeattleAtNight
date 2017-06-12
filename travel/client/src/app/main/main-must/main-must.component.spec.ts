import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMustComponent } from './main-must.component';

describe('MainMustComponent', () => {
  let component: MainMustComponent;
  let fixture: ComponentFixture<MainMustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
