import { IListStudents } from './../../interfaces/IListStudents.interface';
import { ListStudentsService } from './../../services/list-students.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-teacher',
  templateUrl: './area-teacher.component.html',
  styleUrls: ['./area-teacher.component.scss'],
})
export class AreaTeacherComponent implements OnInit {
  titlePage = '';

  teacher = {
    name: 'Danielle Cristina',
    surname: 'da Silva Reis',
  };

  listMaterials = [];
  listStudents: IListStudents[] = [];

  constructor(private studentsService: ListStudentsService) {}

  ngOnInit(): void {
    this.getListStudents();
    this.definitionTitlePage();
  }

  definitionTitlePage() {
    const listSizeMaterial = this.listMaterials.length;
    const listSizeStudents = this.listStudents.length;

    if (listSizeMaterial === 0 && listSizeStudents === 0) {
      this.titlePage = 'Sua lista de materiais e alunos está vazia';
    } else if (listSizeMaterial > 0 && listSizeStudents === 0) {
      this.titlePage = 'Sua lista de alunos está vazia';
    } else if (listSizeMaterial === 0 && listSizeStudents > 0) {
      this.titlePage = 'Sua lista de materiais está vazia';
    }
  }

  getListStudents() {
    return this.studentsService
      .getListStudents()
      .subscribe((listStudents) => (this.listStudents = listStudents));
  }
}
