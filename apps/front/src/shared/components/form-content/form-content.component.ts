import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'test-luizalabs-form-content',
  templateUrl: './form-content.component.html',
  styleUrls: ['./form-content.component.scss'],
})
export class FormContentComponent implements OnInit {
  @Input() id: number;
  @Input() router: string;
  @Input() title: string;
  constructor() {}

  ngOnInit(): void {}
}
