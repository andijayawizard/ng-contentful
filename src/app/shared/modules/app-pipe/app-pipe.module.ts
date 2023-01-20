import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppPipeRoutingModule } from './app-pipe-routing.module';
import { MdToHtmlPipe } from '../../pipes/md-to-html.pipe';


@NgModule({
  declarations: [MdToHtmlPipe],
  imports: [
    CommonModule,
    AppPipeRoutingModule
  ], exports: [MdToHtmlPipe]
})
export class AppPipeModule { }
