import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@test-luizalabs/shared';
import { of } from 'rxjs';

import { ItemListCardComponent } from './item-list-card.component';

describe('ItemListCardComponent', () => {
  let component: ItemListCardComponent;
  let fixture: ComponentFixture<ItemListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemListCardComponent],
      imports: [MaterialModule, RouterTestingModule, HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handleDelete with result', (done) => {
    const spy = spyOn(component.dialog, 'open').and.returnValue({
      afterClosed: () => of(true),
    } as MatDialogRef<unknown>);
    component.handleDelete(1);
    fixture.detectChanges();
    void expect(spy).toHaveBeenCalled();
    done();
  });

  it('should handleDelete', (done) => {
    const spy = spyOn(component.dialog, 'open').and.returnValue({
      afterClosed: () => of(false),
    } as MatDialogRef<unknown>);
    component.handleDelete(1);
    void expect(spy).toHaveBeenCalled();
    done();
  });
});
