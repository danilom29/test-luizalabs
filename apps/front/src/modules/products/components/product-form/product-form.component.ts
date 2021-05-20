import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidateRequired } from '@ntm-al/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../products.service';
import { IProduct } from 'apps/api/src/modules/products/interface/product.interface';
@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  form: FormGroup;
  id: number;

  constructor(private service: ProductsService, private router: Router, public activatedRoute: ActivatedRoute) {
    this.form = new FormGroup({
      name: new FormControl('', [ValidateRequired]),
      origin: new FormControl('', [ValidateRequired]),
      size: new FormControl('', [ValidateRequired]),
      value: new FormControl('', [ValidateRequired]),
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id'));
      if (this.id) {
        void this.service.getOne(this.id).then((product: IProduct) => {
          this.form.patchValue(product);
        });
      }
    });
  }

  async handleSaveOrUpdate(): Promise<void> {
    if (this.id) {
      await this.service.update({ ...this.form.value, id: this.id }, this.id);
    } else {
      await this.service.create(this.form.value);
    }
    void this.router.navigateByUrl('/produtos');
  }
}
