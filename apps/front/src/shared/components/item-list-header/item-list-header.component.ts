/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'test-luizalabs-item-list-header',
  templateUrl: './item-list-header.component.html',
  styleUrls: ['./item-list-header.component.scss'],
})
export class ItemListHeaderComponent implements OnInit {
  @Input() selection = new SelectionModel<number>(true, []);
  @Input() title: string;
  @Input() iconTitle: string;
  @Input() dataSource: any[];
  constructor() {}

  ngOnInit(): void {}

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(): void {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.forEach((row) => this.selection.select(row.id));
  }
}
