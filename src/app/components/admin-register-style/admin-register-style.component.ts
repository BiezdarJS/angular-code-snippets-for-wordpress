import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PrismService } from 'src/app/services/prism.service';


@Component({
  selector: 'app-admin-register-style',
  templateUrl: './admin-register-style.component.html',
  styleUrls: ['./admin-register-style.component.scss']
})
export class AdminRegisterStyleComponent implements OnInit, AfterViewChecked, AfterViewInit, OnDestroy {

  @ViewChild('textArea', { static: true })
  textArea!: ElementRef;
  @ViewChild('codeContent', { static: true })
  codeContent!: ElementRef;
  @ViewChild('pre', { static: true })
  pre!: ElementRef;


  highlighted = false;
  codeType = 'php';

php =`/* =============================================================================
// ADMIN - REGISTER STYLE
// =============================================================================*/

function admin_style() {
  wp_enqueue_style('admin-styles', get_template_directory_uri().'/admin.css');
}
add_action('admin_enqueue_scripts', 'admin_style');`;



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
