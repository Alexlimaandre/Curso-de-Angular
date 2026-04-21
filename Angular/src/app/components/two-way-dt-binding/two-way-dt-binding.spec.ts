import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDtBinding } from './two-way-dt-binding';

describe('TwoWayDtBinding', () => {
  let component: TwoWayDtBinding;
  let fixture: ComponentFixture<TwoWayDtBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayDtBinding],
    }).compileComponents();

    fixture = TestBed.createComponent(TwoWayDtBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
