import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NavListService } from '../services/nav-list.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {


  @ViewChild('mainMenu') mainMenu: ElementRef | undefined;


  navListItems: any;

  constructor(
    private navListService: NavListService
  ) { }

  ngOnInit(): void {
    this.navListItems = this.navListService.navList;
  }


  toggleVisible():void {
    this.mainMenu?.nativeElement.classList.toggle('visible');
  }

  ngAfterViewInit() {
    // this.toggleVisible();
  }

}
