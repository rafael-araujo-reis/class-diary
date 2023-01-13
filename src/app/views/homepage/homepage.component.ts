import { RouterNavigate } from './../../shared/utils/router-navigate';
import { RouterEnum } from './../../shared/constants/RouterEnum.enum';
import { IStudent } from './../../interfaces/IStudent.interface';
import { StudentsService } from './../../services/students.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  listStudents: IStudent[] = [];
  loading = true;

  constructor(
    private studentsService: StudentsService,
    private router: RouterNavigate
  ) {}

  ngOnInit(): void {
    this.getListStudents();
  }

  getListStudents() {
    return this.studentsService
      .getListStudents()
      .subscribe((listStudents) => this.updateListStudents(listStudents));
  }

  viewAnnotationsStudent(event: any) {
    const { id } = event.target;

    if (id) {
      this.router.navigatePath(RouterEnum.NOTES_STUDENT, {
        queryParams: { id: id },
      });
    }
  }

  private updateListStudents(listStudents: IStudent[]) {
    this.listStudents = listStudents;
    this.loading = false;
  }
}
