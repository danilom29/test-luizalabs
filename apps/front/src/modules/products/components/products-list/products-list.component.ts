import { AfterViewInit, Component } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { ProductsService } from '../../products.service';
import { IProduct } from 'apps/api/src/modules/products/interface/product.interface';

@Component({
  selector: 'test-luiza-labs-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements AfterViewInit {
  products: IProduct[];
  selection = new SelectionModel<number>(true, []);
  constructor(public service: ProductsService) {}

  ngAfterViewInit(): void {
    this.getClients();
  }

  getClients(): void {
    void this.service.getAll().then((res: IProduct[]) => {
      this.products = res;
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
