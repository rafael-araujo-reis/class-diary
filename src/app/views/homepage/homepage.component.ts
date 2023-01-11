import { IListStudents } from './../../interfaces/IStudents.interface';
import { StudentsService } from './../../services/students.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  listStudents: IListStudents[] = [];
  loading = true;

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.getListStudents();
  }

  getListStudents() {
    return this.studentsService
      .getListStudents()
      .subscribe((listStudents) => this.updateListStudents(listStudents));
  }

  viewDetailsStudent(event: any) {
    const { id } = event.target;

    if (id) {
      this.getDetailsStudentById(id);
    }
  }

  getDetailsStudentById(id: string) {
    return this.studentsService
      .getDetailsStudentById(id)
      .subscribe((data) => console.log(data));
  }

  private updateListStudents(listStudents: IListStudents[]) {
    this.listStudents = listStudents;
    this.loading = false;
  }
}
