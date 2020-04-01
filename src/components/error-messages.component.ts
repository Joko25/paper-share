import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'error-messages',
  template: `
    <div *ngIf="!isLogin" [hidden]="!errors.length" class="error-message" ><strong>{{errorText}}</strong></div>
    <div *ngIf="isLogin" [hidden]="!errors.length" class="error-message-login" ><strong>{{errorText}}</strong></div>
  `
})
export class ErrorMessagesComponent implements OnChanges {
  @Input('data') data: any = {};
  @Input('login') isLogin: boolean = false;
  errorText: string;
  errors: Array<string> = [];

  ngOnChanges(input: any) {
    this.intError();
  }
  intError() {
    this.errors = [];
    if (this.data && this.data.required) this.errors.push('wajib diisi');
    if (this.data && this.data.greater) this.errors.push('harus lebih besar');
    if (this.data && this.data.maxlength) this.errors.push('terlalu panjang');
    if (this.data && this.data.minlength) this.errors.push('terlalu pendek');
    if (this.data && this.data.pattern) this.errors.push('isi tidak sesuai');
    if (this.data && this.data.equal) this.errors.push('tidak sama');
    if (this.data && this.data.cost_empty) this.errors.push('Nilai HPP wajib lebih dari 0');
    if (this.data && !this.data.required && !this.data.maxlength && !this.data.minlength && !this.data.pattern && !this.data.equal && !this.data.greater && !this.data.cost_empty) this.errors.push('tidak valid');
    this.errorText = this.errors.join(', ');
  }
}
// use
// <error-messages [data]="loginForm.controls?.email?.errors"></error-messages>