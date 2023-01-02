import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaTeacherComponent } from './area-teacher.component';

describe('AreaTeacherComponent', () => {
  let component: AreaTeacherComponent;
  let fixture: ComponentFixture<AreaTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
