import { IListStudents } from './../../interfaces/IListStudents.interface';
import { ListStudentsService } from './../../services/list-students.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  listStudents: IListStudents[] = [];

  constructor(private studentsService: ListStudentsService) {}

  ngOnInit(): void {
    this.getListStudents();
  }

  getListStudents() {
    return this.studentsService
      .getListStudents()
      .subscribe((listStudents) => (this.listStudents = listStudents));
  }
}
