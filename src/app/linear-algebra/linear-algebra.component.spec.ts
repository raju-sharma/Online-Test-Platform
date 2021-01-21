import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearAlgebraComponent } from './linear-algebra.component';

describe('LinearAlgebraComponent', () => {
  let component: LinearAlgebraComponent;
  let fixture: ComponentFixture<LinearAlgebraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinearAlgebraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearAlgebraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
