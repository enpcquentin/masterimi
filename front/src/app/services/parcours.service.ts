import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IParcours, ICourseChoice } from '../interfaces/parcours.interface';
import { IOption } from '../interfaces/option.interface';
import { IValidationData } from '../interfaces/validation-data.interface';


@Injectable({ providedIn: 'root' })
export class ParcoursService {

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  get(): Observable<IParcours> {
    return this.http.get<IParcours>('/users/me/parcours');
  }

  updateOption(option: IOption) {
    return this.http.put('/users/me/parcours_option', {
      option: option.id,
    });
  }

  updateCourseChoice(courseChoice: ICourseChoice) {
    return this.http.put('/users/me/parcours_courses', courseChoice);
  }

  checkCourseChoice(courseChoice: ICourseChoice): Observable<IValidationData[]> {
    return this.http.put<IValidationData[]>('/users/me/parcours_courses_check', courseChoice);
  }
}
