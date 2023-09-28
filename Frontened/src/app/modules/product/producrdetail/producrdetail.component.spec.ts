import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducrdetailComponent } from './producrdetail.component';

describe('ProducrdetailComponent', () => {
  let component: ProducrdetailComponent;
  let fixture: ComponentFixture<ProducrdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducrdetailComponent]
    });
    fixture = TestBed.createComponent(ProducrdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
