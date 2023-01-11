import { RouterNavigate } from './../../shared/utils/router-navigate';
import { RouterEnum } from './../../shared/constants/RouterEnum.enum';
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

  viewNotesStudent(event: any) {
    const { id } = event.target;

    if (id) {
      this.router.navigatePath(RouterEnum.NOTES_STUDENT, {
        queryParams: { id: id },
      });
    }
  }

  // getDetailsStudentById(id: string) {
  //   return this.studentsService
  //     .getDetailsStudentById(id)
  //     .subscribe((data) => console.log(data));
  // }

  private updateListStudents(listStudents: IListStudents[]) {
    this.listStudents = listStudents;
    this.loading = false;
  }
}
