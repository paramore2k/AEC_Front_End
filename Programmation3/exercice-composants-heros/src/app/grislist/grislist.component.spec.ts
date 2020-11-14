import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrislistComponent } from './grislist.component';

describe('GrislistComponent', () => {
  let component: GrislistComponent;
  let fixture: ComponentFixture<GrislistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrislistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrislistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
