import { MatButtonModule } from '@angular/material/button';
import { PhilipEditorComponent } from './philip-editor/philip-editor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill'
import {MatDialogModule} from '@angular/material/dialog';
import { PhilipDialogComponent } from './philip-dialog/philip-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PhilipEditorComponent,
    PhilipDialogComponent
  ],
  imports: [
    CommonModule,
    QuillModule.forRoot(),
    MatDialogModule,
    FormsModule, 
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [
    PhilipDialogComponent,
    QuillModule,
    MatDialogModule,
    FormsModule, 
    ReactiveFormsModule,
    MatButtonModule,
  ]
})
export class PhilipEditorModule { }