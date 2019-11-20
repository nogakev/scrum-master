import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {
	constructor(private auth :AngularFireAuth, private auth_add: AuthService, private router: Router) {}

	ngOnInit() {}

	fullname = this.auth.auth.currentUser.displayName
	email = this.auth.auth.currentUser.email
	items = [
		{selected: false, label: 'Software Developer'}, 
		{selected: false, label: 'Project Manager'},
		{selected: false, label: 'Project Owner'},
		{selected: false, label: 'Scrum Master'}
	];
	
	recordChanges(message, stat) {
		var is_selected;
		
		if(stat.checked) 
			is_selected = true;
		else
			is_selected = false;
		
		for (var i = 0; i < this.items.length; i++) {
			if(this.items[i].label == message)
				this.items[i].selected = is_selected;
		}
	}
	
	submitChanges() {
		// For debugging purposes
		var str = "";
		
		for (var i = 0; i < this.items.length; i++)
			str += this.items[i].label + ": " + this.items[i].selected + ", ";
		
		// alert(str);
		
		// ADD TO DATABASE HERE
		
	}
}

