import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreackfastComponent } from './breackfast.component';

describe('BreackfastComponent', () => {
  let component: BreackfastComponent;
  let fixture: ComponentFixture<BreackfastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreackfastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreackfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
