import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencecardComponent } from './conferencecard.component';

describe('ConferencecardComponent', () => {
  let component: ConferencecardComponent;
  let fixture: ComponentFixture<ConferencecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferencecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferencecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
