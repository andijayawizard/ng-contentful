import { createClient } from 'contentful';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  client = createClient({

  })
  constructor() { }
}
