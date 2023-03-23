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
  selector: 'app-custom-submit-button',
  templateUrl: './custom-submit-button.component.html',
  styleUrls: ['./custom-submit-button.component.scss'],
})
export class CustomSubmitButtonComponent
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

  php = `// Źróło: https://wpklik.com/wordpress-tutorials/html5-submit-button-element-wordpress/\n\n/*removing default submit tag*/
remove_action('wpcf7_init', 'wpcf7_add_form_tag_submit');


/*adding action with function which handles our button markup*/
add_action('wpcf7_init', 'twentysixteen_child_cf7_button');


/*adding out submit button tag*/
if (!function_exists('twentysixteen_child_cf7_button')) {
    function twentysixteen_child_cf7_button() {
    wpcf7_add_form_tag('submit', 'twentysixteen_child_cf7_button_handler');
    }
    }



/*out button markup inside handler*/
if (!function_exists('twentysixteen_child_cf7_button_handler')) {
    function twentysixteen_child_cf7_button_handler($tag) {
    $tag = new WPCF7_FormTag($tag);
    $class = wpcf7_form_controls_class($tag->type);
    $atts = array();
    $atts['class'] = $tag->get_class_option($class);
    $atts['class'] .= ' twentysixteen-child-custom-btn';
    $atts['id'] = $tag->get_id_option();
    $atts['tabindex'] = $tag->get_option('tabindex', 'int', true);
    $value = isset($tag->values[0]) ? $tag->values[0] : '';
    if (empty($value)) {
    $value = esc_html__('Contact Us', 'twentysixteen');
    }
    $atts['type'] = 'submit';
    $atts = wpcf7_format_atts($atts);
    $html = sprintf('<button><span class="twentysixteen-child-custom-btn-text">%2$s</span><i class="twentysixteen-child-custom-icon fas fa-chevron-right "></i></button>', $atts, $value);
    return $html;
    }
    }`;

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
