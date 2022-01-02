import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeproductComponent } from './editeproduct.component';

describe('EditeproductComponent', () => {
  let component: EditeproductComponent;
  let fixture: ComponentFixture<EditeproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
