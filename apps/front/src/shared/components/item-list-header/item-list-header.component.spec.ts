import { DefaultCrudService } from './../../services/defaultCrud/default-crud.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@test-luizalabs/shared';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TitleComponent } from '../title/title.component';

import { ItemListHeaderComponent } from './item-list-header.component';

describe('ItemListHeaderComponent', () => {
  let component: ItemListHeaderComponent;
  let fixture: ComponentFixture<ItemListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemListHeaderComponent, TitleComponent],
      imports: [BrowserAnimationsModule, ReactiveFormsModule, NoopAnimationsModule, MaterialModule, HttpClientModule],
      providers: [DefaultCrudService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListHeaderComponent);
    component = fixture.componentInstance;
    component.dataSource = [
      {
        name: 'teste',
      },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should isAllSelected', () => {
    component.isAllSelected();
    fixture.detectChanges();
  });

  it('should masterToggle', () => {
    component.masterToggle();
    fixture.detectChanges();
  });

  it('should masterToggle with isAllSelected null', () => {
    component.dataSource = [];
    component.masterToggle();
    fixture.detectChanges();
  });
});
