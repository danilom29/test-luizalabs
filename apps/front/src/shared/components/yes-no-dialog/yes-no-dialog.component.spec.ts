import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YesNoDialogComponent } from './yes-no-dialog.component';
import { By } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalHeaderComponent } from '../modal-header/modal-header.component';

describe('YesNoDialogComponent', () => {
  let component: YesNoDialogComponent;
  let fixture: ComponentFixture<YesNoDialogComponent>;
  const data = {
    headerTitle: 'Você deseja excluir?',
    text: 'Você realmente deseja excluir?',
  };

  beforeEach(async(() => {
    void TestBed.configureTestingModule({
      declarations: [YesNoDialogComponent, ModalHeaderComponent],
      imports: [MatIconModule, MatDialogModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {
            close: () => {},
          },
        },
        { provide: MAT_DIALOG_DATA, useValue: data },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YesNoDialogComponent);
    component = fixture.componentInstance;
    component.data = {
      acceptButtonText: 'Sim',
      text: 'Você realmente deseja excluir?',
    };
    fixture.detectChanges();
  });
  it('should show data into html', () => {
    fixture.detectChanges();
    const textH3: HTMLInputElement = fixture.debugElement.query(By.css('h3')).nativeElement as HTMLInputElement;
    const buttonSucess: HTMLButtonElement = fixture.debugElement.query(By.css('.success'))
      .nativeElement as HTMLButtonElement;
    void expect(textH3.textContent).toEqual(data.text);
    void expect(buttonSucess.textContent).toContain('Sim');
  });

  it('should dispatch close event with confirmation', () => {
    const closeSpy = spyOn(component.dialogRef, 'close');
    component.handleClose(true);
    fixture.detectChanges();
    fixture.detectChanges();
    void expect(closeSpy).toHaveBeenCalled();
    void expect(closeSpy).toHaveBeenCalledWith(true);
  });

  it('should handleClose false', () => {
    component.handleClose();
    fixture.detectChanges();
  });

  it('should ngOnInit with data accept button null', () => {
    component.data.acceptButtonText = null;
    component.ngOnInit();
    fixture.detectChanges();
  });
});
