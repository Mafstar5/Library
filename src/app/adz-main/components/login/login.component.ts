import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogContent } from "@angular/material";
@Component({
  selector: 'adz-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

  }

  ngOnInit() {
  }

}
