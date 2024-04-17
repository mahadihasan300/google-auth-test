import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent {

  auth = inject(AuthService);

  signOut(){
    /**
     * As we are storing data in sessin storage 
     * so whenever we signout we need to clear that from session storage.
     * we are getting the key name loggedInUser fron Application -> Session Storage (If we inspact we can see that)
     */
    sessionStorage.removeItem("loggedInUser")

    this.auth.signOut();
  }

}
