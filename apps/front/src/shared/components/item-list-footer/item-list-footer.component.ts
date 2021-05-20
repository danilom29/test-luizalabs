import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { YesNoDialogComponent } from '../yes-no-dialog/yes-no-dialog.component';

@Component({
  selector: 'test-luizalabs-item-list-footer',
  templateUrl: './item-list-footer.component.html',
  styleUrls: ['./item-list-footer.component.scss'],
})
export class ItemListFooterComponent implements OnInit {
  @Input() selection = new SelectionModel<number>(true, []);
  @Output() deleted: EventEmitter<any> = new EventEmitter();
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  handleDelete(): void {
    const dialogRef = this.dialog.open(YesNoDialogComponent, {
      width: '430px',
      height: '250px',
      data: {
        headerTitle: 'ATENÇÃO',
        text: 'Tem certeza que deseja excluir o(s) registro(s) selecionado(s) ?',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }
      this.deleted.emit(true);
    });
  }
}
