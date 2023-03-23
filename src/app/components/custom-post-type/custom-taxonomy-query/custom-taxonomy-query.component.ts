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
  selector: 'app-custom-taxonomy-query',
  templateUrl: './custom-taxonomy-query.component.html',
  styleUrls: ['./custom-taxonomy-query.component.scss'],
})
export class CustomTaxonomyQueryComponent
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

  php = `<?php $args = array(
    'post_type' => 'studia-licencjackie',
    'where' => 't.status="Publish',
    'orderby' => 'date',
    'order' => 'ASC',
    'posts_per_page' => -1,
    'tax_query' => array(
        array(
            'taxonomy' => 'studia-licencjackie_category',
            'field'    => 'term_id',
            'terms'    => $category->term_id,
        ),
    )
);


$query = new WP_Query($args);
if ($query->have_posts()) : while($query->have_posts()) : $query->the_post();

?>
<a class="box_kierunek" href="#">
    <svg class="ico_rozwoj" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.124 34.81">
        <path class="cls-1"
              d="M684.662,2055.76l-10.627,10.26-4.692-4.74-8.463,8.1a1.135,1.135,0,0,0-.037,1.6,1.119,1.119,0,0,0,1.594.04l6.864-6.57,4.7,4.74,12.241-11.81,1.553,1.59,0.639-1.62,2.369-5.99-7.642,2.86Zm-21.741.3,4.688-3.57-1.925-2.55,3.217-2.46v5.82l-4.026,9.75,10.927-8.29,6.337,3.35-2.845-8.44-3.042-.69v-2.15l2.7,1.03,2.67-4.12a1.13,1.13,0,1,0-1.89-1.24h0l-1.68,2.6L674,2043.55v7.24l3.566,0.8,0.63,1.87-2.607-1.38-5.45,4.14,1.02-2.47v-10.18a3.665,3.665,0,0,0,3.958-5.99,3.658,3.658,0,0,0-6.244,2.59,3.679,3.679,0,0,0,1.071,2.6,4.3,4.3,0,0,0,.692.54l-6.312,4.83-2.037-2.7-5.586,4.25,5.325,7.05Zm8.615-16.88a1.4,1.4,0,0,1,1.983,0,1.4,1.4,0,0,1,.411.99,1.4,1.4,0,1,1-2.8,0A1.391,1.391,0,0,1,671.536,2039.18Zm-9.687,9.43,2.6,3.45-1.992,1.51-2.6-3.44Z"
              transform="translate(-656.688 -2036.5)"/>
    </svg>
    <div class="kierunek">Rozwój osobisty</div>
    <div class="tresc">
        <div class="opis_kierunku kol_nie_1">Edukacja, rewalidacja i wspomaganie osób z autyzmem
            i
            zespołem Aspergera
        </div>
        <div class="jakie_studia kol_pom">Studia jednolite 5-letnie</div>
        <p>Lorem ipsum queste dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt.</p>
        <div class="btn btn_arrow_2">
            <span>Sprawdź</span>
            <svg class="arrow_poziom" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 14.875 14.375">
                <path class="cls-3"
                      d="M737.134,583.26h0l-5.1-5.056H743.5v-1.772H732.039l5.1-5.057-1.262-1.253-7.25,7.2,7.25,7.2Z"
                      transform="translate(-728.625 -570.125)"/>
            </svg>
        </div>
    </div>
</a>
<?php endwhile; endif; ?>
<?php wp_reset_postdata($query); ?>`;

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
