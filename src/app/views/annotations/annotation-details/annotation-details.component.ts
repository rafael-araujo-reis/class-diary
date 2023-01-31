import { StudentsService } from './../../../services/students.service';
import { SchoolSubjectService } from './../../../services/school-subject.service';
import { IListSchoolSubject } from './../../../interfaces/IMaterials.interface';
import { IAnnotation } from './../../../interfaces/IAnnotation.interface';
import { AnnotationsService } from './../../../services/annotations.service';
import { RouterNavigate } from './../../../shared/utils/router-navigate';
import { ActivatedRoute } from '@angular/router';
import { RouterEnum } from './../../../shared/constants/RouterEnum.enum';
import { IStudent } from './../../../interfaces/IStudent.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-annotation-details',
  templateUrl: './annotation-details.component.html',
  styleUrls: ['./annotation-details.component.scss'],
})
export class AnnotationDetailsComponent implements OnInit {
  student!: IStudent;
  idAnnotation: string = '';
  annotation!: IAnnotation;
  countCharacters: number = 0;
  maxCharacters: number = 400;
  listSchoolSubject: IListSchoolSubject[] = [];

  idStudent = '';

  constructor(
    private router: RouterNavigate,
    private routeActive: ActivatedRoute,
    private schoolSubjectService: SchoolSubjectService,
    private studentsService: StudentsService,
    private annotations: AnnotationsService
  ) {
    this.routeActive.queryParams.subscribe((params) => {
      this.idAnnotation = params['id'] || '';
    });
    this.getAnnotationDetails(this.idAnnotation);
  }

  ngOnInit(): void {
    this.getListSchoolSubject();
  }

  getDetailsStudentById(id: string) {
    console.log('id', id);
    return this.studentsService
      .getDetailsStudentById(id)
      .subscribe((student: IStudent) => (this.student = student));
  }

  getListSchoolSubject() {
    return this.schoolSubjectService
      .getListSchoolSubject()
      .subscribe((listSchoolSubject) =>
        this.updateListSchoolSubject(listSchoolSubject)
      );
  }

  private updateListSchoolSubject(listSchoolSubject: IListSchoolSubject[]) {
    this.listSchoolSubject = listSchoolSubject;
    // this.loading = false;
  }

  getAnnotationDetails(idAnnotation: string) {
    this.annotations
      .getDetailsAnnotationById(idAnnotation)
      .subscribe((annotation) => this.updateAnnotationData(annotation));
  }

  updateAnnotationData(annotation: IAnnotation) {
    this.annotation = annotation;
    this.idStudent = annotation.idStudent;
    this.getDetailsStudentById(this.idStudent);
  }

  goToAnnotationsStudent() {
    this.router.navigatePath(RouterEnum.NOTES_STUDENT);
  }
}
