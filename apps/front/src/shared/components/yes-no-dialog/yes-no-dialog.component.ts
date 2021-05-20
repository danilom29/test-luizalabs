import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IYesNoDialog } from './interfaces/yes-no-dialog.interface';

@Component({
  selector: 'app-yes-no-dialog',
  templateUrl: './yes-no-dialog.component.html',
  styleUrls: ['./yes-no-dialog.component.scss'],
})
export class YesNoDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<YesNoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IYesNoDialog
  ) {}

  ngOnInit(): void {
    if (!this.data.acceptButtonText) {
      this.data.acceptButtonText = 'Sim';
    }
  }
  handleClose(value = false): void {
    this.dialogRef.close(value);
  }
}
