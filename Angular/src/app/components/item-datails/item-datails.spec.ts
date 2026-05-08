import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDatails } from './item-datails';

describe('ItemDatails', () => {
  let component: ItemDatails;
  let fixture: ComponentFixture<ItemDatails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemDatails],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemDatails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
