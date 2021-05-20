import { EmptyListComponent } from './../empty-list/empty-list.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@test-luizalabs/shared';
import { ItemListCardComponent } from '../item-list-card/item-list-card.component';

import { ItemListContentComponent } from './item-list-content.component';

describe('ItemListContentComponent', () => {
  let component: ItemListContentComponent;
  let fixture: ComponentFixture<ItemListContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemListContentComponent, ItemListCardComponent, EmptyListComponent],
      imports: [MaterialModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
