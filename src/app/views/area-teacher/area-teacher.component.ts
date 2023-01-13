import { RouterEnum } from './../../shared/constants/RouterEnum.enum';
import { RouterNavigate } from './../../shared/utils/router-navigate';
import { Component, OnInit } from '@angular/core';
import { IListSchoolSubject } from './../../interfaces/IMaterials.interface';
import { IStudent } from './../../interfaces/IStudent.interface';
import { SchoolSubjectService } from './../../services/school-subject.service';
import { StudentsService } from './../../services/students.service';

@Component({
  selector: 'app-area-teacher',
  templateUrl: './area-teacher.component.html',
  styleUrls: ['./area-teacher.component.scss'],
})
export class AreaTeacherComponent implements OnInit {
  icon_add = 'add_circle_outline';
  registre_student = 'cadastrar aluno';
  registre_scholl_subject = 'cadastrar matéria';

  titlePage = '';

  loading: boolean = true;

  teacher = {
    name: 'Danielle Cristina',
    surname: 'da Silva Reis',
  };

  listSchoolSubject: IListSchoolSubject[] = [];
  listStudents: IStudent[] = [];

  constructor(
    private studentsService: StudentsService,
    private SchoolSubjectService: SchoolSubjectService,
    private router: RouterNavigate
  ) {}

  ngOnInit(): void {
    this.getListStudents();
    this.getListSchoolSubject();
  }

  ngAfterContentChecked() {
    this.definitionTitlePage();
  }

  definitionTitlePage() {
    const listSizeMaterial = this.listSchoolSubject.length;
    const listSizeStudents = this.listStudents.length;

    let definition = '';

    if (listSizeMaterial === 0 && listSizeStudents === 0) {
      definition = 'materais e alunos';
    } else if (listSizeMaterial > 0 && listSizeStudents === 0) {
      definition = 'alunos';
    } else if (listSizeMaterial === 0 && listSizeStudents > 0) {
      definition = 'matérias';
    }
    this.titlePage = `Sua lista de ${definition} está vazia`;
  }

  getListStudents() {
    return this.studentsService
      .getListStudents()
      .subscribe((listStudents) => this.updateListStudents(listStudents));
  }

  private updateListStudents(listStudents: IStudent[]) {
    this.listStudents = listStudents;
    this.loading = false;
  }

  getListSchoolSubject() {
    return this.SchoolSubjectService.getListSchoolSubject().subscribe(
      (listSchoolSubject) => this.updateListSchoolSubject(listSchoolSubject)
    );
  }

  private updateListSchoolSubject(listSchoolSubject: IListSchoolSubject[]) {
    this.listSchoolSubject = listSchoolSubject;
    this.loading = false;
  }

  viewDetailsStudent(event: any) {
    const { id } = event.target;

    if (id) {
      this.router.navigatePath(RouterEnum.STUDENT_DETAILS, {
        queryParams: { id: id },
      });
    }
  }
}
