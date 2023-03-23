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
  selector: 'app-custom-taxonomy-zmiana-permalinkow',
  templateUrl: './custom-taxonomy-zmiana-permalinkow.component.html',
  styleUrls: ['./custom-taxonomy-zmiana-permalinkow.component.scss'],
})
export class CustomTaxonomyZmianaPermalinkowComponent
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

  php = `// Źródło: https://wisdmlabs.com/blog/add-taxonomy-term-custom-post-permalinks-wordpress/\n\n
<?php
// In this line we are creating our own custom tag %projectscategory%.
'rewrite' => array('slug' => 'projects/%projectscategory%', 'with_front' => false)



// Now, we will write a program to replace this tag with appropriate term name in the permalink.
add_filter('post_type_link', 'projectcategory_permalink_structure', 10, 4);
function projectcategory_permalink_structure($post_link, $post, $leavename, $sample) {
    if (false !== strpos($post_link, '%projectscategory%')) {
        $projectscategory_type_term = get_the_terms($post->ID, 'projectscategory');
        if (!empty($projectscategory_type_term))
            $post_link = str_replace('%projectscategory%', array_pop($projectscategory_type_term)->
            slug, $post_link);
        else
            $post_link = str_replace('%projectscategory%', 'uncategorized', $post_link);
    }
    return $post_link;
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
