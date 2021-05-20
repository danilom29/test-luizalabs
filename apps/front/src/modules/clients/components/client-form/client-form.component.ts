import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidateRequired, ValidateEmail } from '@ntm-al/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from '../../clients.service';
import { IClient } from 'apps/api/src/modules/clients/interface/client.interface';
import { ValidateCpf } from '@test-luizalabs/shared';
@Component({
  selector: 'client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {
  form: FormGroup;
  id: number;

  constructor(private service: ClientsService, private router: Router, public activatedRoute: ActivatedRoute) {
    this.form = new FormGroup({
      name: new FormControl('', [ValidateRequired]),
      email: new FormControl('', [ValidateRequired, ValidateEmail]),
      gender: new FormControl('', [ValidateRequired]),
      cpf: new FormControl('', [ValidateRequired, ValidateCpf]),
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id'));
      if (this.id) {
        void this.service.getOne(this.id).then((client: IClient) => {
          this.form.patchValue(client);
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
    void this.router.navigateByUrl('/clientes');
  }
}
