declare var google: any;
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  
private router = inject(Router);

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
        /**
         * We will get client_id, credential from this response
         * if we copy the credential and go to jwt.io
         * we can decript the token where we will get all the information what we need like user name , user image and so on.
         */
        console.log(resp);

        // From where it will be decripted
        this.handleLogin(resp);

      }
    });

    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 350
    })
  }

  private decodeToken(token: string){
    /**
     * What JWT token contain ?
     * First is Header
     * Secound is Credential or Payload
     * Third is Secret or key
     * 
     * So we are interested in the credential or payload only 
     * So we are taking the secound thing by spliting.
     */
    return JSON.parse(atob(token.split(".")[1]));
  }

  handleLogin(response : any){
    if(response){
       //decode the token
       const payLoad = this.decodeToken(response.credential);
       //store in session
       sessionStorage.setItem("loggedInUser", JSON.stringify(payLoad));
       //navigate to home/browse
       this.router.navigate(['browse'])
    }

  }

}
