import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViennoiseriesComponent } from './viennoiseries.component';

describe('ViennoiseriesComponent', () => {
  let component: ViennoiseriesComponent;
  let fixture: ComponentFixture<ViennoiseriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViennoiseriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViennoiseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
