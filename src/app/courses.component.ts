import { Component } from '@angular/core';
import {CourseService} from './course.service';
import {CommonModule} from '@angular/common';
import {NgFor} from '@angular/common';
import {NgForOf} from '@angular/common';

@Component ({
    selector: 'app-courses',
    template: `<h2> Courses </h2>
    {{title}}
    <ul>
      <li *ngFor="let course of courses">
        {{course}}
      </li>
    </ul>`,
    providers: [CourseService]
})

export class CoursesComponent {
  title = 'Courses offered';
  courses;

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourse();
  }
}
