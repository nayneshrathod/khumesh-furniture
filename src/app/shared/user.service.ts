import { Injectable } from '@angular/core';
import { User } from './user';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // usersRef: AngularFireList<any>;
  // userRef: AngularFireObject<any>;
  constructor(private fdb: AngularFireDatabase,public db: AngularFirestore) { }

// /**Add USer */
//   AddUser(user: User) {
//     this.usersRef.push({
//       cust_first_name: user.cust_first_name,
//       cust_last_name: user.cust_last_name,
//       mobile: user.mobile,
//       email: user.email,
//       password: user.password,
//     }).catch(error => {
//       this.errorMgmt(error);
//     })
//   }


// /**Update User */

//   UpdateUser(id, user: User) {
//     this.userRef.update({
//       cust_first_name: user.cust_first_name,
//       cust_last_name: user.cust_last_name,
//       mobile: user.mobile,
//       email: user.email,
//       password: user.password,
//     }).catch(error => {
//       this.errorMgmt(error);
//     })
//   }


//   /* Get book */
//   GetUser(id: string) {
//     this.userRef = this.db.object('users-list/' + id);
//     return this.userRef;
//   }

//   /* Get book list */
//   GetUserList() {
//     this.usersRef = this.db.list('user-list');
//     return this.usersRef;
//   }

//   /* Delete book */
//   DeleteUser(id: string) {
//     this.userRef = this.db.object('user-list/' + id);
//     this.userRef.remove()
//     .catch(error => {
//       this.errorMgmt(error);
//     })
//   }
//   private errorMgmt(error) {
//     console.log(error)
//   }

 

  
  createUser(value ){
    return this.db.collection('users').add({
      firstname: value.name,
      surname: value.surname,
      email:  value.age ,
      password: value.password,
    });
  }
}
