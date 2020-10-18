import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitImageComponent } from './produit-image.component';

describe('ProduitImageComponent', () => {
  let component: ProduitImageComponent;
  let fixture: ComponentFixture<ProduitImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
