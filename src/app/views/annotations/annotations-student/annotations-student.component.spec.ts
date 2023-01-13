import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotationsStudentComponent } from './annotations-student.component';

describe('AnnotationsStudentComponent', () => {
  let component: AnnotationsStudentComponent;
  let fixture: ComponentFixture<AnnotationsStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnnotationsStudentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnnotationsStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
