import { Component, OnInit} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AngularFireAuth} from '@angular/fire/auth'
import {DialogOverviewExampleDialog} from './modal.component'


export interface DialogData {
  task: string;
  name: string;
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
    added: boolean;
    task: string;
    name: string;
    todo=[
    {id: '1',message: 'Need to use bathroom',user:'Matthew Chuang'},
    {id: '2',message: 'Need to drive home',user:'Matthew Chuang'},
    {id: '3',message: 'Need to learn C++',user:'Matthew Chuang'}
    ]
    

    constructor(public dialog: MatDialog, private auth: AngularFireAuth) { }

    ngOnInit() {
    }

    counter="1"
    username=this.auth.auth.currentUser.displayName
    openDialog(): void {
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '550px',
        data: {name: this.name, task: this.task}
      });
      this.todo.slice();
      dialogRef.afterClosed().subscribe(result => {
        if(this.task){
          this.todo.push({id:'4',message:this.task,user:this.username})
        }
        console.log('The dialog was closed');
        this.task = result;
      });
   }
  


    drop(event: CdkDragDrop<string[]>) {

        console.log("EVENT: ");
        console.log(event);

        if (event.previousContainer === event.container) {
          moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
          transferArrayItem(event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex);
        }
  }

}

