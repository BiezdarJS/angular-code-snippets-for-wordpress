import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { PrismService } from 'src/app/services/prism.service';

@Component({
  selector: 'app-more-posts-ajax',
  templateUrl: './more-posts-ajax.component.html',
  styleUrls: ['./more-posts-ajax.component.scss']
})
export class MorePostsAjaxComponent implements OnInit, AfterViewChecked, AfterViewInit, OnDestroy {

  @ViewChild('textArea', { static: true })
  textArea!: ElementRef;
  @ViewChild('codeContent', { static: true })
  codeContent!: ElementRef;
  @ViewChild('pre', { static: true })
  pre!: ElementRef;


  highlighted = false;
  codeType = 'php';

php =`/* =============================================================================
// BLOG - more posts AJAX
// =============================================================================*/

<?php

function more_post_ajax(){

    $ppp = (isset($_POST["ppp"])) ? $_POST["ppp"] : 1;
    $page = (isset($_POST['pageNumber'])) ? $_POST['pageNumber'] : 0;

    header("Content-Type: text/html");


    $args = unserialize( stripslashes( $_POST['query'] ), true );
    $args['post_type'] = 'post';
    $args['posts_per_page'] = 1;
	$args['paged'] = $_POST['page'] + 1; // we need next page to be loaded
	$args['post_status'] = 'publish';    

    $loop = new WP_Query($args);

    $out = '';

    if ($loop -> have_posts()) :  while ($loop -> have_posts()) : $loop -> the_post();
    
    
        $out .= '<li class="promocja-list__item komitet-item">';
        $out .= '<img alt="" class="promocja-item__img" src="/wp-content/themes/UniwersytetWarszawski/images/promocja/news-1.png">';
        $out .= '<p class="promocja-item__name">Tytuł newsa promocyjnego</p>'.get_the_title().'</p>';
        $out .= '<p class="promocja-item__date">14.08</p><a class="promocja-item__more" href="">Więcej&gt;&gt;&gt;</a>';
        $out .= '<p>'.get_the_content().'</p>
         </li>';

    endwhile;
    endif;
    wp_reset_postdata();
    die($out);
}

add_action('wp_ajax_nopriv_more_post_ajax', 'more_post_ajax');
add_action('wp_ajax_more_post_ajax', 'more_post_ajax'); \n?>`;



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
