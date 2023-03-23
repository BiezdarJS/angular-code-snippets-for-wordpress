import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PrismService } from 'src/app/services/prism.service';

@Component({
  selector: 'app-options-page',
  templateUrl: './options-page.component.html',
  styleUrls: ['./options-page.component.scss'],
})
export class OptionsPageComponent
  implements OnInit, AfterViewChecked, AfterViewInit, OnDestroy
{
  @ViewChild('textArea', { static: true })
  textArea!: ElementRef;
  @ViewChild('codeContent', { static: true })
  codeContent!: ElementRef;
  @ViewChild('pre', { static: true })
  pre!: ElementRef;

  highlighted = false;
  codeType = 'php';

  php = `/* =============================================================================
// ACF - generate options page
// =============================================================================*/

if (function_exists('acf_add_options_page')) {
  acf_add_options_page(array(
      'page_title' => 'Usługi',
      'menu_title' => 'Usługi',
      'menu_slug' => 'uslugi-acf',
      'parent_slug' => ''
  ));`;

  constructor(private prismService: PrismService) {}

  ngOnInit(): void {}

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
