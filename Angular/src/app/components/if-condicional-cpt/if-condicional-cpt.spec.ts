import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfCondicionalCpt } from './if-condicional-cpt';

describe('IfCondicionalCpt', () => {
  let component: IfCondicionalCpt;
  let fixture: ComponentFixture<IfCondicionalCpt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfCondicionalCpt],
    }).compileComponents();

    fixture = TestBed.createComponent(IfCondicionalCpt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
