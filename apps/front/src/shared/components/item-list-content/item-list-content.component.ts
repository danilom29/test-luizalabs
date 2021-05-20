import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'test-luizalabs-item-list-content',
  templateUrl: './item-list-content.component.html',
  styleUrls: ['./item-list-content.component.scss'],
})
export class ItemListContentComponent implements OnInit {
  @Input() dataSource: any[];

  constructor() {}

  ngOnInit(): void {}
}
