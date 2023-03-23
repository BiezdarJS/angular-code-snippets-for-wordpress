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
  selector: 'app-custom-taxonomy-jak-stworzyc',
  templateUrl: './custom-taxonomy-jak-stworzyc.component.html',
  styleUrls: ['./custom-taxonomy-jak-stworzyc.component.scss'],
})
export class CustomTaxonomyJakStworzycComponent
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

  php = `/**
 * Add custom taxonomies
 *
 * Additional custom taxonomies can be defined here
 * https://codex.wordpress.org/Function_Reference/register_taxonomy
 */
function add_custom_taxonomies() {
  // Add new "Locations" taxonomy to Posts
  register_taxonomy('scenariusze_category', 'scenariusze', array(
    // Hierarchical taxonomy (like categories)
    'hierarchical' => true,
    // This array of options controls the labels displayed in the WordPress Admin UI
    'labels' => array(
      'name' => _x( 'Kategorie', 'taxonomy general name' ),
      'singular_name' => _x( 'Kategoria', 'taxonomy singular name' ),
      'search_items' =>  __( 'Szukaj Kategorii' ),
      'all_items' => __( 'Wszystkie Kategorie' ),
      'parent_item' => __( 'Kategoria Rodzica' ),
      'parent_item_colon' => __( 'Kategoria Rodzica:' ),
      'edit_item' => __( 'Edytuj Kategorię' ),
      'update_item' => __( 'Zapisz Kategorię' ),
      'add_new_item' => __( 'Dodaj Nową Kategorię' ),
      'new_item_name' => __( 'Dodaj Nową Kategorię' ),
      'menu_name' => __( 'Kategorie' ),
    ),
    // Control the slugs used for this taxonomy
    'rewrite' => array(
      'slug' => 'scenariusze-category', // This controls the base slug that will display before each term
      'with_front' => false, // Don't display the category base before "/locations/"
      'hierarchical' => true // This will allow URL's like "/locations/boston/cambridge/"
    ),
  ));
}
add_action( 'init', 'add_custom_taxonomies', 0 );`;

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
