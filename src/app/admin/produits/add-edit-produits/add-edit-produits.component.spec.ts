import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProduitsComponent } from './add-edit-produits.component';

describe('AddEditProduitsComponent', () => {
  let component: AddEditProduitsComponent;
  let fixture: ComponentFixture<AddEditProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditProduitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
