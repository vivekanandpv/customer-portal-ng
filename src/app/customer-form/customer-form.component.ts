import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RestService } from '../_services/rest.service';
import { CustomerCreateViewModel } from '../_models/app.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private restService: RestService,
    private router: Router
  ) {
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
    });
  }

  ngOnInit(): void {}

  get firstName(): FormControl {
    return this.form.controls['firstName'] as FormControl;
  }

  get lastName(): FormControl {
    return this.form.controls['lastName'] as FormControl;
  }

  get email(): FormControl {
    return this.form.controls['email'] as FormControl;
  }

  get phone(): FormControl {
    return this.form.controls['phone'] as FormControl;
  }

  onSubmit() {
    this.restService
      .post<CustomerCreateViewModel>(
        'http://localhost:8080/api/v1/customers',
        this.form.value
      )
      .subscribe((res) => {
        this.router.navigate(['/']);
      });
  }
}
