import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyOrderComponent } from './ready-order.component';

describe('ReadyOrderComponent', () => {
  let component: ReadyOrderComponent;
  let fixture: ComponentFixture<ReadyOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadyOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
