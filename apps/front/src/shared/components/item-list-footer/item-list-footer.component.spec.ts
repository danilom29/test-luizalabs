import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '@test-luizalabs/shared';
import { of } from 'rxjs';

import { ItemListFooterComponent } from './item-list-footer.component';

describe('ItemListFooterComponent', () => {
  let component: ItemListFooterComponent;
  let fixture: ComponentFixture<ItemListFooterComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemListFooterComponent],
      imports: [MaterialModule, HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListFooterComponent);
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
    component.handleDelete();
    fixture.detectChanges();
    void expect(spy).toHaveBeenCalled();
    done();
  });

  it('should handleDelete', (done) => {
    const spy = spyOn(component.dialog, 'open').and.returnValue({
      afterClosed: () => of(false),
    } as MatDialogRef<unknown>);
    component.handleDelete();
    void expect(spy).toHaveBeenCalled();
    done();
  });
});
