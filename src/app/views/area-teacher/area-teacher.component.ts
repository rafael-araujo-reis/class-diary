import { RouterEnum } from './../../shared/constants/RouterEnum.enum';
import { RouterNavigate } from './../../shared/utils/router-navigate';
import { Component, OnInit } from '@angular/core';
import { IListMaterials } from './../../interfaces/IMaterials.interface';
import { IListStudents } from './../../interfaces/IStudents.interface';
import { MaterialsService } from './../../services/materials.service';
import { StudentsService } from './../../services/students.service';

@Component({
  selector: 'app-area-teacher',
  templateUrl: './area-teacher.component.html',
  styleUrls: ['./area-teacher.component.scss'],
})
export class AreaTeacherComponent implements OnInit {
  icon_add = 'add_circle_outline';
  registre_student = 'cadastrar aluno';
  registre_material = 'cadastrar material';

  titlePage = '';

  teacher = {
    name: 'Danielle Cristina',
    surname: 'da Silva Reis',
  };

  listMaterials: IListMaterials[] = [];
  listStudents: IListStudents[] = [];

  constructor(
    private studentsService: StudentsService,
    private materialsService: MaterialsService,
    private router: RouterNavigate
  ) {}

  ngOnInit(): void {
    this.getListStudents();
    this.getListMaterials();
  }

  ngAfterContentChecked() {
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

  getListMaterials() {
    return this.materialsService
      .getListMaterials()
      .subscribe((listMaterials) => (this.listMaterials = listMaterials));
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
