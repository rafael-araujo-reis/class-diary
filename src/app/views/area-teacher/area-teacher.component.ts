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
  listStudents = [];

  constructor() {}

  ngOnInit(): void {
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
}
