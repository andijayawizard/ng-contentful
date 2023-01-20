import { Pipe, PipeTransform } from '@angular/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Document } from '@contentful/rich-text-types';
import * as marked from "marked";

@Pipe({
  name: 'mdToHtml'
})
export class MdToHtmlPipe implements PipeTransform {

  // transform(value: string): any {
  //   return marked(value);
  // }
  transform(value: unknown, ...args: unknown[]): unknown {
    return documentToHtmlString(value as Document);
  }

}
