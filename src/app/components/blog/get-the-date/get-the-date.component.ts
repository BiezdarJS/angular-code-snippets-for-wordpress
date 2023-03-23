import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { PrismService } from 'src/app/services/prism.service';

@Component({
  selector: 'app-get-the-date',
  templateUrl: './get-the-date.component.html',
  styleUrls: ['./get-the-date.component.scss']
})
export class GetTheDateComponent implements OnInit, AfterViewChecked, AfterViewInit, OnDestroy {

  @ViewChild('textArea', { static: true })
  textArea!: ElementRef;
  @ViewChild('codeContent', { static: true })
  codeContent!: ElementRef;
  @ViewChild('pre', { static: true })
  pre!: ElementRef;


  highlighted = false;
  codeType = 'php';

php =`/* =============================================================================
// BLOG - get the date
// =============================================================================*/

<?php \n\necho apply_filters( 'the_date', get_the_date('d.m.Y'), get_option( 'date_format' ), '', '' );r.\n\n ?>` ;



  constructor(
    private prismService: PrismService
  ) {}

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.prismService.highlightAll();
  }

  ngAfterViewChecked() {
    if (this.highlighted) {
      this.prismService.highlightAll();
      this.highlighted = false;
    }
  }

  ngOnDestroy() {
    console.log('');
  }

}
