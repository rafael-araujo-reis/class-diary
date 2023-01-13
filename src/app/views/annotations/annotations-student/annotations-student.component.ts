import { IAnnotation } from './../../../interfaces/IAnnotation.interface';
import { AnnotationsService } from './../../../services/annotations.service';
import { IStudent } from './../../../interfaces/IStudent.interface';
import { StudentsService } from './../../../services/students.service';
import { ActivatedRoute } from '@angular/router';
import { RouterNavigate } from './../../../shared/utils/router-navigate';
import { RouterEnum } from './../../../shared/constants/RouterEnum.enum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annotations-student',
  templateUrl: './annotations-student.component.html',
  styleUrls: ['./annotations-student.component.scss'],
})
export class AnnotationsStudentComponent implements OnInit {
  student: IStudent | undefined;
  idStudent: string = '';
  loading: boolean = true;
  listAnnotationsStudent: IAnnotation[] = [];

  constructor(
    private router: RouterNavigate,
    private routeActive: ActivatedRoute,
    private studentsService: StudentsService,
    private annotation: AnnotationsService
  ) {}

  ngOnInit(): void {
    this.routeActive.queryParams.subscribe((params) => {
      this.idStudent = params['id'] || '';
    });

    this.getDetailsStudentById(this.idStudent);
    this.searchAnnotationsStudents();
  }

  goToHomeDiary() {
    this.router.navigatePath(RouterEnum.HOME_DIARY);
  }

  getDetailsStudentById(id: string) {
    return this.studentsService
      .getDetailsStudentById(id)
      .subscribe((student: IStudent) => this.updateDetailsStudent(student));
  }

  updateDetailsStudent(student: IStudent) {
    this.student = student;
    this.loading = false;
  }

  searchAnnotationsStudents() {
    return this.annotation.listAnnotations.subscribe(
      (annotations: IAnnotation[]) => this.updateAnnotationsStudent(annotations)
    );
  }

  viewDetailsAnnotation(event: any) {
    const { id } = event.target;

    if (id) {
      this.router.navigatePath(RouterEnum.NOTE_DETAILS, {
        queryParams: { id: id },
      });
    }
  }

  private updateAnnotationsStudent(annotations: IAnnotation[]) {
    this.listAnnotationsStudent = annotations.filter(
      (annotation: IAnnotation) => annotation.idStudent === this.idStudent
    );
  }
}
