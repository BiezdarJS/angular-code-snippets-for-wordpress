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
  selector: 'app-custom-taxonomy-jak-pobrac-kategorie',
  templateUrl: './custom-taxonomy-jak-pobrac-kategorie.component.html',
  styleUrls: ['./custom-taxonomy-jak-pobrac-kategorie.component.scss'],
})
export class CustomTaxonomyJakPobracKategorieComponent
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

  php = `<?php
   $args = array(
               'taxonomy' => 'scenariusze_category',
               'orderby' => 'name',
               'order'   => 'ASC'
           );

   $cats = get_categories($args);

   foreach($cats as $cat) { ?>

    <li class="scenarios-categories__item">
        <label class="scenarios-categories__checkbox">
            <?php echo $cat->name; ?>
          <input type="checkbox" name="cat[]" value="<?php echo $cat->term_id; ?>">
          <span class="checkmark"></span>
        </label>
    </li>
    
    <?php } ?>`;

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
