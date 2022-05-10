import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-SignIn',
  templateUrl: './SignIn.component.html',
  styleUrls: ['./SignIn.component.css']
})

export class SignInComponent implements OnInit {

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              ) { }

  ngOnInit() {}
  
}
