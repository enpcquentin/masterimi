import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IParcours, ICourseChoice } from '../interfaces/parcours.interface';


@Injectable({ providedIn: 'root' })
export class ParcoursService {

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  get(): Observable<IParcours> {
    return this.http.get<IParcours>('/users/me/parcours');
  }

  updateOption(option: string) {
    return this.http.put('/users/me/parcours_option', {
      option,
    });
  }

  updateCourseChoice(courseChoice: ICourseChoice) {
    return this.http.put('/users/me/parcours_courses', courseChoice);
  }
}
