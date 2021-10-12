import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaPoshtaComponent } from './nova-poshta.component';

describe('NovaPoshtaComponent', () => {
  let component: NovaPoshtaComponent;
  let fixture: ComponentFixture<NovaPoshtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaPoshtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaPoshtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
