import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrixProduitComponent } from './prix-produit.component';

describe('PrixProduitComponent', () => {
  let component: PrixProduitComponent;
  let fixture: ComponentFixture<PrixProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrixProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrixProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
