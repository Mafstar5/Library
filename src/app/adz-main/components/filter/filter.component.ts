import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
import {MatDialogContent} from '@angular/material';
import {MatDialog, MatDialogConfig} from "@angular/material";
@Component({
  selector: 'adz-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  inputs: ['books']
})
export class FilterComponent implements OnInit {
  public books: Array<any> = [];
  public userLang: String;
  constructor(private route: Router,
    private dataService: DataService,
    private translate: TranslateService,
    private dialog: MatDialog) {
    //get the prefered language
    this.userLang = localStorage.getItem('userLang') ? localStorage.getItem('userLang') : navigator.language.substring(0, 2);
  }

  ngOnInit() {
  }
  // filter the data with author and/or the category
  filter(name: string,author: string, category: string) {
    if(author||category){
    this.dataService.ulterData({"name":name, "author": author, "category": category }); }
    else{
    this.dataService.ulterData({"name":name, "author": author, "category": category });
      console.log('auiiii')
  }
  }
  //select a book, send "null" in case the user has chosen "none" to reset the selection
  select(bookName: any) {
    if (!bookName) {
      this.dataService.selectBook(null);
    }
    this.dataService.selectBook(bookName);
  }
  // change the language to french
  changeToFr() {
    this.userLang = 'fr';
    localStorage.setItem('userLang', 'fr');
    this.translate.setDefaultLang('fr');
  }
  // change the language to english
  changeToEn() {
    this.userLang = 'en';
    localStorage.setItem('userLang', 'en');
    this.translate.setDefaultLang('en');
  }
  login() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.maxWidth=600;
    dialogConfig.minWidth=400;
    this.dialog.open(LoginComponent, dialogConfig);
  }
  register() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.maxWidth=600;
    dialogConfig.minWidth=400;
    this.dialog.open(RegisterComponent, dialogConfig);
  }
}
