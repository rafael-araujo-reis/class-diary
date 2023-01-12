import { INote } from './../../../interfaces/INote.interface';
import { NotesService } from './../../../services/notes.service';
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
  idStudent: string = '';
  loading: boolean = true;
  listNotesStudent: INote[] = [];

  constructor(
    private router: RouterNavigate,
    private routeActive: ActivatedRoute,
    private studentsService: StudentsService,
    private note: NotesService
  ) {}

  ngOnInit(): void {
    this.routeActive.queryParams.subscribe((params) => {
      this.idStudent = params['id'] || '';
    });

    this.getDetailsStudentById(this.idStudent);
    this.searchNotesStudents(this.idStudent);
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

  searchNotesStudents(idStudent: string) {
    return this.note
      .getListNotesStudentByIdStudent(idStudent)
      .subscribe((notes: INote[]) => this.updateNotesStudent(notes));
  }

  private updateNotesStudent(notes: INote[]) {
    this.listNotesStudent = notes.filter(
      (note: INote) => note.idStudent === this.idStudent
    );
  }
}
