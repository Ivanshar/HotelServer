import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenseComponent } from './conferense.component';

describe('ConferenseComponent', () => {
  let component: ConferenseComponent;
  let fixture: ComponentFixture<ConferenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
