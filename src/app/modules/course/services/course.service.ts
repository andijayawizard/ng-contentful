import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.accessToken
  })
  constructor() { }
  getCourses(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: environment.contentful.contentTypeIds.course
    }, query)).then((res) => res.items)
  }
  getCourse(id: any): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: environment.contentful.contentTypeIds.course
    }, {
      'sys.id': id
    })).then((res) => res.items[0])
  }
}
