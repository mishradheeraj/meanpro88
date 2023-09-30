import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoboxComponent } from './dialobox.component';

describe('DialoboxComponent', () => {
  let component: DialoboxComponent;
  let fixture: ComponentFixture<DialoboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialoboxComponent]
    });
    fixture = TestBed.createComponent(DialoboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
