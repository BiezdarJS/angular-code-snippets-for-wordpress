import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PrismService } from 'src/app/services/prism.service';

@Component({
  selector: 'app-zmiana-nazwy-wpisy-oraz-ikony',
  templateUrl: './zmiana-nazwy-wpisy-oraz-ikony.component.html',
  styleUrls: ['./zmiana-nazwy-wpisy-oraz-ikony.component.scss']
})
export class ZmianaNazwyWpisyOrazIkonyComponent implements OnInit, AfterViewChecked, AfterViewInit, OnDestroy {

  @ViewChild('textArea', { static: true })
  textArea!: ElementRef;
  @ViewChild('codeContent', { static: true })
  codeContent!: ElementRef;
  @ViewChild('pre', { static: true })
  pre!: ElementRef;


  highlighted = false;
  codeType = 'php';

php =`// Zmieniamy nawę wpisy na Dziennik bodowy
function cp_change_post_object() {
    $get_post_type = get_post_type_object('post');
    $labels = $get_post_type->labels;
        $labels->name = 'Dziennik Budowy';
        $labels->singular_name = 'Wpis';
        $labels->add_new = 'Dodaj nowy wpis';
        $labels->add_new_item = 'Dodaj nowy';
        $labels->edit_item = 'Edytuj wpis';
        $labels->new_item = 'Wpis';
        $labels->view_item = 'Zobacz Wpis';
        $labels->search_items = 'Szukaj wpisu';
        $labels->not_found = 'Nie znaleziono wpisu';
        $labels->not_found_in_trash = 'W kosz nie znaleziono wpisu';
        $labels->all_items = 'Wszyskie wpisy';
        $labels->menu_name = 'Dziennik Budowy';
        $labels->name_admin_bar = 'Dziennik Budowy'; 
        
}
add_action( 'init', 'cp_change_post_object' );



add_filter('register_post_type_args', 'movies_to_films', 10, 2);
function movies_to_films($args, $post_type){
 
    if ($post_type == 'post'){
        $args['menu_icon'] = 'dashicons-hammer';
        $args['rewirite']['slug'] = 'dziennik-budowy';
        $args['rewirite']['with_front'] = true;
    }
 
    return $args;
}`;



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
