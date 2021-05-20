import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@test-luizalabs/shared';
import { TitleComponent } from '../title/title.component';

import { FormContentComponent } from './form-content.component';

describe('FormContentComponent', () => {
  let component: FormContentComponent;
  let fixture: ComponentFixture<FormContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormContentComponent, TitleComponent],
      imports: [MaterialModule, RouterTestingModule, HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
