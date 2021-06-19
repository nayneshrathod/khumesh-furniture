import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { UserService } from 'src/app/shared/user.service';
import { Title } from '@angular/platform-browser';
import { AngularFireDatabase } from "@angular/fire/database";
import { Router } from '@angular/router';

// import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  userForm: FormGroup;
  title = 'Registartion ';
  validation_messages = {
    'firstname': [
      { type: 'required', message: 'First Name is required.' }
    ],
    'surname': [
      { type: 'required', message: 'Surname is required.' }
    ],
    'email': [
      { type: 'required', message: 'Age is required.' },
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
    ]
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public userservice: UserService,
    // private db: AngularFireDatabase,
    // private userApi: UserService,
    private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
 
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      firstname: ['', Validators.required ],
      surname: ['', Validators.required ],
      email: ['', Validators.required ],
      password: ['', Validators.required ],
    });
  }

  // onSubmit() {
  //   console.log('Sample');
  // }
  onSubmit(value) {
    this.userservice.createUser(value)
      .then(
        res => {
          this.resetFields();
          this.router.navigate(['/home']);
        }
      )
  }

  resetFields(){
 
    this.userForm = this.fb.group({
      firstname: ['', Validators.required ],
      surname: ['', Validators.required ],
      email: ['', Validators.required ],
      password: ['', Validators.required ],
     
    });
  }



}
