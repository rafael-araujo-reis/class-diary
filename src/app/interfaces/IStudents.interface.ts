export interface IListStudents {
  id: string;
  nameStudent: {
    name: string;
    surname: string;
  };
  photoStudent: string;
  studySeries: string;
  linkedSchoolSubjects: [];
}
