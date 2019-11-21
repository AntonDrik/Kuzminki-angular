import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SertificatsComponent } from './sertificats.component';

describe('SertificatsComponent', () => {
  let component: SertificatsComponent;
  let fixture: ComponentFixture<SertificatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SertificatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SertificatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
