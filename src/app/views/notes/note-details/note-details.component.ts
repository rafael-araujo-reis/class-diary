import { INote } from './../../../interfaces/INote.interface';
import { NotesService } from './../../../services/notes.service';
import { RouterNavigate } from './../../../shared/utils/router-navigate';
import { ActivatedRoute } from '@angular/router';
import { RouterEnum } from './../../../shared/constants/RouterEnum.enum';
import { IListStudent } from './../../../interfaces/IStudents.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss'],
})
export class NoteDetailsComponent implements OnInit {
  student: IListStudent | undefined;
  idNote: string = '';
  annotation: INote | undefined;

  constructor(
    private router: RouterNavigate,
    private routeActive: ActivatedRoute,
    private notes: NotesService
  ) {}

  ngOnInit(): void {
    this.routeActive.queryParams.subscribe((params) => {
      this.idNote = params['id'] || '';
    });
    this.getAnnotationDetails(this.idNote);
  }

  getAnnotationDetails(idNote: string) {
    this.notes
      .getDetailsNoteById(idNote)
      .subscribe((annotation) => this.updateAnnotationData(annotation));
  }

  updateAnnotationData(annotation: INote) {
    this.annotation = annotation;
    console.log(this.annotation);
  }

  goToNotesStudent() {
    this.router.navigatePath(RouterEnum.NOTES_STUDENT);
  }
}
