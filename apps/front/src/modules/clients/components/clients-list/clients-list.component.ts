import { AfterViewInit, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { IClient } from 'apps/api/src/modules/clients/interface/client.interface';
import { ClientsService } from '../../clients.service';

@Component({
  selector: 'vitrines-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
})
export class ClientsListComponent implements AfterViewInit {
  clients: IClient[];
  filters = [
    {
      field: 'name',
    },
  ];
  selection = new SelectionModel<number>(true, []);
  constructor(public service: ClientsService, public dialog: MatDialog) {}

  ngAfterViewInit(): void {
    this.getClients();
  }

  getClients(): void {
    void this.service.getAll().then((res: IClient[]) => {
      this.clients = res;
    });
  }

  deleted(id: number): void {
    void this.service.delete(id).then(() => {
      this.getClients();
    });
  }

  deletedMulti(): void {
    void Promise.all(this.selection.selected.map((item) => this.service.delete(item))).then(() => {
      this.selection.clear();
      this.getClients();
    });
  }
}
