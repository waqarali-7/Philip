import { PhilipEditorComponent } from './../philip-editor/philip-editor.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-philip-dialog',
  templateUrl: './philip-dialog.component.html',
  styleUrls: ['./philip-dialog.component.scss']
})
export class PhilipDialogComponent implements OnInit {

  @Input() modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
   
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
   
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
   
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
   
      ['clean'],                                         // remove formatting button
   
      ['link', 'image', 'video']                         // link and image, video
    ]
  };

  @Input() description: string = 'desc';
  @Input() title: string = '';

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
    const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = { description: this.description, title: this.title};
      const dialogRef = this.matDialog.open(PhilipEditorComponent, dialogConfig);

      dialogRef.afterClosed().subscribe(
          val => console.log("Dialog output:", val)
      );
  }
}