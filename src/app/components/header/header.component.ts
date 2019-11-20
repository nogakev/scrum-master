import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  toggleSide(){
    if (document.getElementById("mySideNav2").style.width == "250px") {
        document.getElementById("mySideNav2").style.width = "0";
        document.getElementById("header").style.marginLeft= "0";
        document.getElementById("header-right").style.marginLeft="0";
        document.getElementById("scrum-board").style.marginLeft="0";
        document.getElementById("other-pages").style.marginLeft="0";
    } else { 
        document.getElementById("mySideNav2").style.width="250px";
        document.getElementById("header").style.marginLeft="250px";
        document.getElementById("header-right").style.marginLeft="250px";
        document.getElementById("scrum-board").style.marginLeft="250px";
        document.getElementById("other-pages").style.marginLeft="250px";
    }
  }

  signOut() {
    if (this.auth.logout()) {
        this.router.navigateByUrl('/login');
    } else {
        console.log("Logout failed.");
    }
  }

}
