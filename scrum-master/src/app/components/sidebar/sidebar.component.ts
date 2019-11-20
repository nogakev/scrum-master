import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private auth :AngularFireAuth, private auth2: AuthService, private router: Router) { }

  ngOnInit() {
  }
  username=this.auth.auth.currentUser.displayName
  onClose(event: Event){
    event.preventDefault();
    document.getElementById("mySideNav").style.width = "0";
    document.getElementById("header").style.marginLeft="0";
    document.getElementById("header-right").style.marginLeft="0";
    document.getElementById("scrum-board").style.marginLeft="0";
    document.getElementById("other-pages").style.marginLeft="0";
  }

  switchToHome() {
	this.resetFontWeight();
	
	document.getElementById("home").style.fontWeight  = "bold";
	document.getElementById("header-right").style.display = "none";
	document.getElementById("header-right-settings").style.display = "none";
	document.getElementById("header-right-home").style.display = "block";
  }
  
  switchToProject() {
	this.resetFontWeight();
	
	document.getElementById("proj").style.fontWeight  = "bold";
	document.getElementById("header-right-home").style.display = "none";
	document.getElementById("header-right-settings").style.display = "none";
	document.getElementById("header-right").style.display = "block";
  }
  
  switchToSettings() {
	  this.resetFontWeight();
	  
	  document.getElementById("sett").style.fontWeight  = "bold";
	  document.getElementById("header-right-home").style.display = "none";
	  document.getElementById("header-right").style.display = "none";
	  document.getElementById("header-right-settings").style.display = "block";
  }
  
  resetFontWeight() {
	var links_arr = document.getElementsByClassName("links");
	for(var i = 0; i < links_arr.length; i++) {
		var test = <HTMLElement>links_arr[i];
		test.style.fontWeight = "normal";
	}
  }
  
  signOut() {
	if (this.auth2.logout()) {
        this.router.navigateByUrl('/login');
    } else {
        console.log("Logout failed.");
    }
  }
}
