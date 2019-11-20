import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore'

import { HeaderComponent } from './components/header/header.component';
import { BoardComponent } from './components/board/board.component';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DialogOverviewExampleDialog } from './components/board/modal.component';

import { environment } from 'src/environments/environment';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';

import { MaterialModule } from './material/material.module';
import { MatDialogRef} from '@angular/material/dialog';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { LoggedinViewComponent } from './main_app/loggedin-view/loggedin-view.component';
import { LoggedoutViewComponent } from './main_app/loggedout-view/loggedout-view.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { MembersListComponent } from './components/members-list/members-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardComponent,
    SidebarComponent,
    PageNotFoundComponent,
    RegistrationComponent,
    LoginComponent,
    DialogOverviewExampleDialog,
    LoggedinViewComponent,
    LoggedoutViewComponent,
    TaskListComponent,
    MembersListComponent,
	HomeComponent,
	SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    DragDropModule
  ],
  entryComponents:[
    DialogOverviewExampleDialog
  ],
  providers: [{provide: MatDialogRef,useValue:{}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
