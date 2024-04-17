declare var google: any;
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  


  ngOnInit(): void {
    google.accounts.id.initialize({
      /***
       * To generate client-id we need to go to
       * console.cloud.google.com
       * Then
       *    Create a new project
       *    select the project
       *    API and Services
       *      Then
       *        OAuth consent screen
       *          Extarnal
       *          Give app-name, domain.
       *          In scope select all info what i need
       *          Save.
       *        Credential
       *          Create Credentials 
       *          OAuth client Id
       *          Application type = web application
       *          Authorised JavaScript origins:
       *            Add Uri : http://localhost:4200/
       *            Domain : http://localhost
       *            Creat.
       */

      client_id: '531121168764-fj0qmf042utb4q601id0dt2ojmdpe6ej.apps.googleusercontent.com',
      callback: (resp: any)=> {

      }
    });

    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 350
    })
  }

}
