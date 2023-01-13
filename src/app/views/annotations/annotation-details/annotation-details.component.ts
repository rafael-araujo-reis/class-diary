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
  student: IStudent | undefined;
  idAnnotation: string = '';
  annotation: IAnnotation | undefined;

  constructor(
    private router: RouterNavigate,
    private routeActive: ActivatedRoute,
    private annotations: AnnotationsService
  ) {}

  ngOnInit(): void {
    this.routeActive.queryParams.subscribe((params) => {
      this.idAnnotation = params['id'] || '';
    });
    this.getAnnotationDetails(this.idAnnotation);
  }

  getAnnotationDetails(idAnnotation: string) {
    this.annotations
      .getDetailsAnnotationById(idAnnotation)
      .subscribe((annotation) => this.updateAnnotationData(annotation));
  }

  updateAnnotationData(annotation: IAnnotation) {
    this.annotation = annotation;
    console.log(this.annotation);
  }

  goToAnnotationsStudent() {
    this.router.navigatePath(RouterEnum.NOTES_STUDENT);
  }
}
