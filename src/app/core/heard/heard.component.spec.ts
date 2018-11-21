import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeardComponent } from './heard.component';

describe('HeardComponent', () => {
  let component: HeardComponent;
  let fixture: ComponentFixture<HeardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
