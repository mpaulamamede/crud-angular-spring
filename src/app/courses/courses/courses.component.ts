import { Component, OnInit } from '@angular/core';
import { Course } from '../models/model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[];
  displayedColumns = ['name', 'category'];

  constructor() {
    this.courses = [
      { _id: '1', name: 'Angular', category: 'front-end'}
    ];
   }

  ngOnInit(): void {
  }

}
