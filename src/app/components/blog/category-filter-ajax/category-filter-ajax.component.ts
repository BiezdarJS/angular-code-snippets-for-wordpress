import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PrismService } from 'src/app/services/prism.service';

@Component({
  selector: 'app-category-filter-ajax',
  templateUrl: './category-filter-ajax.component.html',
  styleUrls: ['./category-filter-ajax.component.scss']
})
export class CategoryFilterAjaxComponent implements OnInit, AfterViewChecked, AfterViewInit, OnDestroy {

  @ViewChild('textArea', { static: true })
  textArea!: ElementRef;
  @ViewChild('codeContent', { static: true })
  codeContent!: ElementRef;
  @ViewChild('pre', { static: true })
  pre!: ElementRef;


  highlighted = false;
  codeType = 'php';

  html = `<form action="<?php echo site_url() ?>/wp-admin/admin-ajax.php" method="POST" id="scenariusze-filter">
  <ul class="scenarios-categories list">
      <?php
         $args = array(
                     'taxonomy' => 'scenariusze_category',
                     'orderby' => 'name',
                     'order'   => 'ASC'
                 );
  
         $cats = get_categories($args);
  
         foreach($cats as $cat) {
      ?>
      <li class="scenarios-categories__item">
          <label class="scenarios-categories__checkbox">
              <?php echo $cat->name; ?>
            <input type="checkbox" name="cat[]" value="<?php echo $cat->term_id; ?>">
            <span class="checkmark"></span>
          </label>
      </li>
      <?php } ?>
  </ul>
  <input type="hidden" name="action" value="scenarios_filter">
</form>
  `

php =`/* =============================================================================
// TO JAKO PLIK FILTER.PHP w folderze 'inc'
// =============================================================================*/

<?php\n\nadd_action('wp_ajax_scenarios_filter', 'scenariusze_filter');
add_action('wp_ajax_nopriv_scenarios_filter', 'scenariusze_filter');

function scenariusze_filter(){
 
    $categories = $_POST['cat'];


    $params['post_type'] = 'scenariusze';
    $params['where'] = 't.post_status="Publish"';
    $params['orderby'] = 'name';
    $params['order'] = 'ASC';
    if (isset($categories)) { 
        $params['tax_query'][] = array (
                    'taxonomy' => 'scenariusze_category',
                    'field'    => 'id',
                    'terms'    => $categories
        );
    }
    $params['posts_per_page'] = -1; 


    ?>
	
    <ul class="scenarios-list list">

        <?php $query = new WP_Query($params);
        if ($query->have_posts()) : while($query->have_posts()) : $query->the_post();
        ?>
        <li class="scenarios-list__item flex">
            <img class="scenarios-list__img" src="<?php echo get_the_post_thumbnail_url(get_the_ID(), 'full'); ?>" alt="">
            <div class="scenarios-list__content flex">
                <div class="scenarios-list__txt">
                    <h3 class="scenarios-list__title">
                        <?php echo get_the_title(); ?>
                    </h3>
                    <p class="scenarios-list__description">
                        <?php echo get_the_excerpt(); ?>
                    </p>
                </div>
                <div class="scenarios-list__more">
                    <a href="<?php echo get_permalink(); ?>" class="scenarios-list__more-link"></a>
                </div>
            </div>
            <?php 
            $rodzaj_cwiczenia  = get_post_meta( get_the_ID(), 'rodzaj_cwiczenia', true );
            $cel  = get_post_meta( get_the_ID(), 'cel', true );
            $przebieg  = get_post_meta( get_the_ID(), 'przebieg', true );
            $czas_trwania  = get_post_meta( get_the_ID(), 'czas_trwania', true );
            $materialy  = get_post_meta( get_the_ID(), 'materialy', true );
            $dodatkowe_informacje  = get_post_meta( get_the_ID(), 'dodatkowe_informacje', true );
            $plik_pdf  = get_post_meta( get_the_ID(), 'plik_pdf', true );
            ?>
            <ul class="scenarios-single list">
                <li class="scenarios-single__item flex">
                    <div class="scenarios-single-left">
                        <i class="scenarios-single__arrow"></i>
                        <h4 class="scenarios-single__title">
                            Rodzaj ćwiczenia
                        </h4>
                    </div>
                    <div class="scenarios-single-right">
                        <?php echo $rodzaj_cwiczenia; ?>
                    </div>
                </li>
                <li class="scenarios-single__item flex">
                    <div class="scenarios-single-left">
                        <i class="scenarios-single__arrow"></i>
                        <h4 class="scenarios-single__title">
                            Cel
                        </h4>
                    </div>
                    <div class="scenarios-single-right">
                        <?php echo $cel; ?>
                    </div>
                </li>
                <li class="scenarios-single__item flex">
                    <div class="scenarios-single-left">
                        <i class="scenarios-single__arrow"></i>
                        <h4 class="scenarios-single__title">
                            Przebieg
                        </h4>
                    </div>
                    <div class="scenarios-single-right">
                        <?php echo $przebieg; ?>
                    </div>
                </li>
                <li class="scenarios-single__item flex">
                    <div class="scenarios-single-left">
                        <i class="scenarios-single__arrow"></i>
                        <h4 class="scenarios-single__title">
                            Czas trwania
                        </h4>
                    </div>
                    <div class="scenarios-single-right">
                        <?php echo $czas_trwania; ?>
                    </div>
                </li>
                <li class="scenarios-single__item flex">
                    <div class="scenarios-single-left">
                        <i class="scenarios-single__arrow"></i>
                        <h4 class="scenarios-single__title">
                            Materiały
                        </h4>
                    </div>
                    <div class="scenarios-single-right">
                        <?php echo $materialy; ?>
                    </div>
                </li>
                <li class="scenarios-single__item flex">
                    <div class="scenarios-single-left">
                        <i class="scenarios-single__arrow"></i>
                        <h4 class="scenarios-single__title">
                            Dodatkowe informacje
                        </h4>
                    </div>
                    <div class="scenarios-single-right">
                        <?php echo $dodatkowe_informacje; ?>
                    </div>
                </li>
                <li class="scenarios-single__item flex">
                    <div class="scenarios-single-left">
                        <i class="scenarios-single__arrow"></i>
                        <h4 class="scenarios-single__title">
                            Plik PDF do pobrania
                        </h4>
                    </div>
                    <div class="scenarios-single-right">
                        <?php echo $plik_pdf; ?>
                    </div>
                </li>
            </ul>
        </li>
        <?php wp_reset_postdata(); ?>
        <?php endwhile; ?>
    </ul>
    <?php
    else :
        echo '<p style="text-align:center;">Nie znaleziono postów.</p>';
    endif;
	
    die();
}\n?>`;

javascript = `<script>

jQuery(function($){
    $('#scenariusze-filter').change(function(){
        
        var scenariosFilter = $('#scenariusze-filter');
          var $spinner = $( "<span class='spinner'></span>" );
          $('.scenarios-list').remove();
          $('.scenarios-list__wrap').prepend($spinner);
        $.ajax({
            url:scenariosFilter.attr('action'),
            data:scenariosFilter.serialize(), // form data
            type:scenariosFilter.attr('method'), // POST
            beforeSend:function(xhr){
                scenariosFilter.find('button').text('Processing...'); // changing the button label
            },
            success:function(data){
                scenariosFilter.find('button').text('Apply filter'); // changing the button label back
                $('.scenarios-list__wrap').html(data); // insert data
                $spinner.remove();

            }
        });
        return false;
    });
});

</script>`;


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
