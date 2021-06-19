import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  custsRef: AngularFireList<any>;
  custRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }
/**add Custome */
  AddCust(customer: Customer) {
    this.custsRef.push({
      cust_name: customer.cust_name,
      mobile: customer.mobile,
      payment: customer.payment,
      address: customer.email,
      email: customer.email,
      product: customer.product,
      order_date: customer.order_date,
    }).catch(error => {
      this.errorMgmt(error);
    })
  }
  /*gte singal*/
  GetCust(id: string) {
    this.custRef = this.db.object('custs-list/' + id);
    return this.custRef;
  }


  /*Get List*/
  GetCustList() {
    this.custsRef = this.db.list('custs-list');
    return this.custsRef;
  }
  /* Update book */
  UpdateBox(id,customer: Customer) {
    this.custRef.update({
      cust_name: customer.cust_name,
      mobile: customer.mobile,
      payment: customer.payment,
      address: customer.email,
      email: customer.email,
      product: customer.product,
      order_date: customer.order_date,
    })
      .catch(error => {
        this.errorMgmt(error);
      })
  }

  /* Delete book */
  DeleteBox(id: string) {
    this.custRef = this.db.object('custs-list/' + id);
    this.custRef.remove()
    .catch(error => {
      this.errorMgmt(error);
    })
  }


  private errorMgmt(error) {
    console.log(error)
  }
}
