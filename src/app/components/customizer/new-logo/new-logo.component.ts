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
  selector: 'app-new-logo',
  templateUrl: './new-logo.component.html',
  styleUrls: ['./new-logo.component.scss'],
})
export class NewLogoComponent
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

  php = `function your_theme_customizer_setting($wp_customize) {
    // add a setting 
    $wp_customize->add_setting('footer_logo');
    // Add a control to upload the footer logo
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'footer_logo', array(
        'label' => 'Logo Footer',
        'section' => 'title_tagline', //this is the section where the custom-logo from WordPress is
        'settings' => 'footer_logo',
        'priority' => 8 // show it just below the custom-logo
    )));
}

add_action('customize_register', 'your_theme_customizer_setting');`;

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
