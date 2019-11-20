import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  id: string;
  task: string;
  project: string;
}

//store all of current user's tasks here from database probably
const NAMES: string[] = [
  'Make a boat', 'Live', 'Eat', 'Take a piss', 'Write testing scripts', 'Test', 'Code with Angular', 'Train developers', 'Invest', 'Over',
  'Indigo Ice Cream', 'Jostle', 'Can can', 'Look over house', 'Violin play', 'Art and Design', 'Make UIs', 'Tell manager', 'Exist'
];
//store all project names here that come from database probs
const PROJECTS: string[]=[
  'Project1', 'Project2','Project3','Project4','Project5','Project6','Project7'
]

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'table-overview-example',
  styleUrls: ['task-list.component.css'],
  templateUrl: 'task-list.component.html',
})
export class TaskListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'task', 'project'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
    // Create 100 tasks
    const tasks = Array.from({length: 100}, (_, k) => createNewTask(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(tasks);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewTask(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] 
  const project=PROJECTS[Math.round(Math.random() * (PROJECTS.length - 1))]

  return {
    id: id.toString(),
    task: name,
    project: project,
  };
}
