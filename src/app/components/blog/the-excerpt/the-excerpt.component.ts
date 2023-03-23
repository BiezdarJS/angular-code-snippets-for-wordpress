import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PrismService } from 'src/app/services/prism.service';

@Component({
  selector: 'app-the-excerpt',
  templateUrl: './the-excerpt.component.html',
  styleUrls: ['./the-excerpt.component.scss']
})
export class TheExcerptComponent implements OnInit, AfterViewChecked, AfterViewInit, OnDestroy {

  @ViewChild('textArea', { static: true })
  textArea!: ElementRef;
  @ViewChild('codeContent', { static: true })
  codeContent!: ElementRef;
  @ViewChild('pre', { static: true })
  pre!: ElementRef;


  highlighted = false;
  codeType = 'php';

php =`/* excerpt length */

add_filter('excerpt_length', 'excerpt_change');
function excerpt_change($length) {

    $length = 6;

    return $length . '...';
}

/* Excerpt MORE */

function new_excerpt_more( $more ) {
    return '';
}
add_filter('excerpt_more', 'new_excerpt_more');`;



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
