import { RouterEnum } from './../../../shared/constants/RouterEnum.enum';
import { RouterNavigate } from 'src/app/shared/utils/router-navigate';
import { IStudent } from './../../../interfaces/IStudent.interface';
import { StudentsService } from './../../../services/students.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
})
export class StudentDetailsComponent implements OnInit {
  student: IStudent | undefined;
  id: string = '';

  constructor(
    private studentsService: StudentsService,
    private routeActive: ActivatedRoute,
    private router: RouterNavigate
  ) {}

  ngOnInit(): void {
    this.routeActive.queryParams.subscribe((params) => {
      this.id = params['id'] || '';
    });

    this.getDetailsStudentById(this.id);
  }

  getDetailsStudentById(id: string) {
    return this.studentsService
      .getDetailsStudentById(id)
      .subscribe((student: IStudent) => (this.student = student));
  }

  goToAreaTeacher() {
    this.router.navigatePath(RouterEnum.AREA_TEACHERT);
  }
}
