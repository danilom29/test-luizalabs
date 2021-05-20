import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { YesNoDialogComponent } from '../yes-no-dialog/yes-no-dialog.component';
@Component({
  selector: 'test-luizalabs-item-list-card',
  templateUrl: './item-list-card.component.html',
  styleUrls: ['./item-list-card.component.scss'],
})
export class ItemListCardComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() id: number;
  @Input() selection = new SelectionModel<number>(true, []);
  @Output() deleted: EventEmitter<any> = new EventEmitter();
  @Output() selected: EventEmitter<any> = new EventEmitter();
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  handleDelete(id: number): void {
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
      this.selection.deselect(id);
      this.deleted.emit([id]);
    });
  }
}
