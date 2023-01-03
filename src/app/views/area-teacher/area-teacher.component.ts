import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { IListStudents } from './../../interfaces/IListStudents.interface';
import { ListStudentsService } from './../../services/list-students.service';

@Component({
  selector: 'app-area-teacher',
  templateUrl: './area-teacher.component.html',
  styleUrls: ['./area-teacher.component.scss'],
})
export class AreaTeacherComponent implements OnInit, AfterViewChecked {
  titlePage = '';

  teacher = {
    name: 'Danielle Cristina',
    surname: 'da Silva Reis',
  };

  @Input() listMaterials = [];
  @Input() listStudents: IListStudents[] = [];

  constructor(private studentsService: ListStudentsService) {}

  ngOnInit(): void {
    this.getListStudents();
  }

  ngAfterViewChecked() {
    this.definitionTitlePage();
  }

  definitionTitlePage() {
    const listSizeMaterial = this.listMaterials.length;
    const listSizeStudents = this.listStudents.length;

    let definition = '';

    if (listSizeMaterial === 0 && listSizeStudents === 0) {
      definition = 'materais e alunos';
    } else if (listSizeMaterial > 0 && listSizeStudents === 0) {
      definition = 'alunos';
    } else if (listSizeMaterial === 0 && listSizeStudents > 0) {
      definition = 'materiais';
    }
    this.titlePage = `Sua lista de ${definition} está vazia`;
  }

  getListStudents() {
    return this.studentsService
      .getListStudents()
      .subscribe((listStudents) => (this.listStudents = listStudents));
  }
}
