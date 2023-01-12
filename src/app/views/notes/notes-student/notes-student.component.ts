import { IListStudents } from './../../../interfaces/IStudents.interface';
import { StudentsService } from './../../../services/students.service';
import { ActivatedRoute } from '@angular/router';
import { RouterNavigate } from './../../../shared/utils/router-navigate';
import { RouterEnum } from './../../../shared/constants/RouterEnum.enum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-student',
  templateUrl: './notes-student.component.html',
  styleUrls: ['./notes-student.component.scss'],
})
export class NotesStudentComponent implements OnInit {
  student: IListStudents | undefined;
  id: string = '';
  loading: boolean = true;

  constructor(
    private router: RouterNavigate,
    private routeActive: ActivatedRoute,
    private studentsService: StudentsService
  ) {}

  ngOnInit(): void {
    this.routeActive.queryParams.subscribe((params) => {
      this.id = params['id'] || '';
    });

    this.getDetailsStudentById(this.id);
  }

  goToHomeDiary() {
    this.router.navigatePath(RouterEnum.HOME_DIARY);
  }

  getDetailsStudentById(id: string) {
    return this.studentsService
      .getDetailsStudentById(id)
      .subscribe((student: IListStudents) =>
        this.updateDetailsStudent(student)
      );
  }
  updateDetailsStudent(student: IListStudents) {
    this.student = student;
    this.loading = false;
    console.log(this.student);
  }

  // get searchNotesStudents(id: string){
  //   return this.notesServices
  // }
}
