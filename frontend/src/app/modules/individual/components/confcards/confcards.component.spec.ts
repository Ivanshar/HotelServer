import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfcardsComponent } from './confcards.component';

describe('ConfcardsComponent', () => {
  let component: ConfcardsComponent;
  let fixture: ComponentFixture<ConfcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
