import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiensDetailsProduitComponent } from './liens-details-produit.component';

describe('LiensDetailsProduitComponent', () => {
  let component: LiensDetailsProduitComponent;
  let fixture: ComponentFixture<LiensDetailsProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiensDetailsProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiensDetailsProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
