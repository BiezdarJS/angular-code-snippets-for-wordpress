import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KodComponent } from './kod.component';

describe('KodComponent', () => {
  let component: KodComponent;
  let fixture: ComponentFixture<KodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
