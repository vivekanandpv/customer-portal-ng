import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CustomerViewModel, ServerResponse } from '../_models/app.models';
import { RestService } from '../_services/rest.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  customers$: Observable<CustomerViewModel[]>;

  constructor(private restService: RestService) {
    this.customers$ = this.restService
      .read<ServerResponse<CustomerViewModel[]>>(
        'http://localhost:8080/api/v1/customers'
      )
      .pipe(map((v) => v.body));
  }

  ngOnInit(): void {}
}
