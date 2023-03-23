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
  selector: 'app-wyszukiwarka-przyklad',
  templateUrl: './wyszukiwarka-przyklad.component.html',
  styleUrls: ['./wyszukiwarka-przyklad.component.scss'],
})
export class WyszukiwarkaPrzykladComponent
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

  php = `<form action="#oferta-sprzetowa-boxy" method="GET">
    <div class="july2019__line">
        <div class="july2019__form-item--full">
            <input id="text1" name="nazwa_sprzetu" placeholder="Wpisz interesujcy Cię sprzęt" size="40" type="text" value="">
        </div>
    </div>
    <div class="july2019__line">
        <p class="filter-txt">Filtruj</p>
    </div>                    
        <div class="july2019__line">
                                <div class="july2019__form-item">                           
            <select aria-invalid="false" class="wpcf7-form-control wpcf7-select rewq" name="laboratorium">
                <option value="">
                     Wyszukaj po konsorcjum
                </option>
                <option value="Uniwersytet+Warszawski">
                    Uniwersytet Warszawski
                </option>
                <option value="Instytut+Chemii+Fizycznej+Polskiej+Akademii+Nauk">
                    Instytut Chemii Fizycznej Polskiej Akademii Nauk
                </option>
                <option value="Politechnika+%C5%9Al%C4%85ska">
                    Politechnika Śląska
                </option>
                <option value="Politechnika+Wroc%C5%82awska">
                    Politechnika Wrocławska
                </option>
                <option value="Pozna%C5%84skie+Centrum+Superkomputerowo-Sieciowe">
                    Poznańskie Centrum Superkomputerowo-Sieciowe
                </option>
                <option value="Uniwersytet+Marii+Currie-Sk%C5%82odowskiej">
                    Uniwersytet Marii Currie-Skłodowskiej
                </option>           
                <option value="Uniwersytet+Miko%C5%82aja+Kopernika">
                    Uniwersytet Mikołaja Kopernika
                </option>  
            </select>
        </div>
        <div class="july2019__form-item">
            <select aria-invalid="false" class="wpcf7-form-control wpcf7-select rewq" name="osoba">
                <option value="">
                    Wyszukaj po osobie
                </option>
                <option value="3053">
                    Piotr Fita
                </option>
                <option value="3032">
                    Erwin Maciak
                </option>                                
            </select>
        </div>
                            
    </div>	                    


    <div class="july2019__line">
        <ul class="uw-list tag-list">                        
                                        <li class="tag-list__item tag-list__item--search">
                <a href="#">angiografia OCT</a>
                <input type="checkbox" name="tag[]" value="134">
            </li>
                                        <li class="tag-list__item tag-list__item--search">
                <a href="#">badania biomedyczne</a>
                <input type="checkbox" name="tag[]" value="136">
            </li>
                                        <li class="tag-list__item tag-list__item--search">
                <a href="#">badania materiałowe</a>
                <input type="checkbox" name="tag[]" value="114">
            </li>
                                        <li class="tag-list__item tag-list__item--search active">
                <a href="#">badania okulistyczne</a>
                <input type="checkbox" name="tag[]" value="132">
            </li>
                                        <li class="tag-list__item tag-list__item--search visually-hidden">
                <a href="#">badania optyczne</a>
                <input type="checkbox" name="tag[]" value="129">
            </li>
                                        <li class="tag-list__item tag-list__item--search visually-hidden">
                <a href="#">biomateriały</a>
                <input type="checkbox" name="tag[]" value="119">
            </li>
                                        <li class="tag-list__item tag-list__item--search visually-hidden">
                <a href="#">dopplerowska OCT</a>
                <input type="checkbox" name="tag[]" value="135">
            </li>
                                        <li class="tag-list__item tag-list__item--search visually-hidden">
                <a href="#">inżynieria powierzchni</a>
                <input type="checkbox" name="tag[]" value="128">
            </li>
                                        <li class="tag-list__item tag-list__item--search visually-hidden">
                <a href="#">lasery</a>
                <input type="checkbox" name="tag[]" value="118">
            </li>
                                        <li class="tag-list__item tag-list__item--search visually-hidden">
                <a href="#">mikroskopia OCM</a>
                <input type="checkbox" name="tag[]" value="137">
            </li>
                                        <li class="tag-list__item tag-list__item--search visually-hidden">
                <a href="#">obrazowanie</a>
                <input type="checkbox" name="tag[]" value="130">
            </li>
                                        <li class="tag-list__item tag-list__item--search visually-hidden">
                <a href="#">obrazowanie biomedyczne</a>
                <input type="checkbox" name="tag[]" value="131">
            </li>
                                        <li class="tag-list__item tag-list__item--search visually-hidden">
                <a href="#">promocja</a>
                <input type="checkbox" name="tag[]" value="140">
            </li>
                                        <li class="tag-list__item tag-list__item--search visually-hidden">
                <a href="#">spektroskopia</a>
                <input type="checkbox" name="tag[]" value="115">
            </li>
                                        <li class="tag-list__item tag-list__item--search visually-hidden">
                <a href="#">spektroskopia absorpcyjna</a>
                <input type="checkbox" name="tag[]" value="116">
            </li>
                                        <li class="tag-list__item tag-list__item--search visually-hidden">
                <a href="#">spektroskopia czasowo- rozdzielcza</a>
                <input type="checkbox" name="tag[]" value="117">
            </li>
                                        <li class="tag-list__item tag-list__item--search visually-hidden">
                <a href="#">temperatury kriogeniczne</a>
                <input type="checkbox" name="tag[]" value="139">
            </li>
                                        <li class="tag-list__item tag-list__item--search visually-hidden">
                <a href="#">Test</a>
                <input type="checkbox" name="tag[]" value="126">
            </li>
                                        <li class="tag-list__item tag-list__item--search visually-hidden">
                <a href="#">tomografia OCT</a>
                <input type="checkbox" name="tag[]" value="133">
            </li>
                                        <li class="tag-list__item tag-list__item--search visually-hidden">
                <a href="#">ultraszybkie obrazowanie trójwymiarowe</a>
                <input type="checkbox" name="tag[]" value="138">
            </li>
                                                     <li class="load-more-btn">Zobacz więcej »</li>
            <li class="hide-btn">Ukryj</li>
               
        </ul>
    </div>
    <div class="form-center">

                    <input onclick="return submit()" class="wpcf7-form-control wpcf7-submit" type="submit" value="Szukaj">
                                        
                       
    </div>
</form>




<section id="oferta-sprzetowa-boxy" class="uw-section oferta-sprzetowa-boxy">
    <div class="container">
        <div class="list-gallery">
              <span class="list-gallery__item" data="file"></span>
                <span class="list-gallery__item active" data="article"></span>
        </div>
    </div>
    <ul class="uw-list uw-list--article uw-list--download-v2">    
    <?php        
        $nazwa_sprzetu = urldecode($_GET['nazwa_sprzetu']); 
        $gdzie_sprzet_sie_znajduje =  urldecode($_GET['laboratorium']);  

        $osoba = $_GET['osoba'];

    
        $params = array();
    
        $params['post_type'] = 'oferta-sprzetowa';
        $params['where'] = 't.post_status="Publish"';
        $params['orderby'] = 'position';
        $params['post_title_like'] = $nazwa_sprzetu;
        $params['meta_query'] = array(
            'relation' => 'AND',
                array(
                'relation' => 'OR',
            )
        );  

        $params['meta_query'][]= array(
                'key'		=> 'lokalizacja',
                'value'		=> $gdzie_sprzet_sie_znajduje,
                'compare'	=> 'LIKE'
            );
        $params['meta_query'][]= array(
                'key'		=> 'osoba_kontaktowa',
                'value'		=> $osoba,
                'compare'	=> 'LIKE'
            );     

        $params['order'] = 'ASC';
        $params['posts_per_page'] = 100; 
    
    
    
        /*$params = array(
        'post_type' => 'oferta-sprzetowa',
        'where' => 't.post_status="Publish"', 
        'orderby' => 'position',
        'meta_query' => array(
            'relation' => 'AND',
            array(
                'relation' => 'AND',
                array(
                        'key'		=> 'osoba_kontaktowa',
                        'value'		=> '"' . $osoba . '"',
                        'compare'	=> 'LIKE'
                ),
                array(
                        'key'		=> 'lokalizacja',
                        'value'		=> $gdzie_sprzet_sie_znajduje,
                        'compare'	=> 'LIKE'
                )
            ),       
        ),
        'post_title_like' => $nazwa_sprzetu,
        'order' => 'ASC',         
        'posts_per_page' => 100    
        );*/
    
        $tagi = $_GET['tag'];
    
    
               
    
        foreach ($tagi as $single_tag) {
                    
            $single = $single_tag;
                    
                    
            $params['tag__in'][] = $single;
                    
        }

         /*print("<pre>".print_r($params)."</pre>"); */  


        $the_query = new WP_Query( $params );
        if ($the_query->have_posts()) {
        // The Loop
        while ( $the_query->have_posts() ) :
            $the_query->the_post();
        // create array to print it on template
        $nazwa_sprzetu = get_the_title();
        $gdzie_sie_dany_sprzet_znajduje = get_field('lokalizacja');
        $link = get_permalink();
 
    ?>             

        <li class="uw-list__item">
            <div class="container">
                <?php
                $images = get_field('zdjecia');
                $size = 'full';
                 ?>
                <div class="uw-list__content-wrap uw-list__content-wrap--img"><img alt="" class="uw-list__img" src="<?php echo $images[0][url]; ?>"></div>
                <div class="uw-list__content-wrap">
                    <p class="uw-list__title"><?php echo $nazwa_sprzetu; ?></p>
                    <p class="uw-list__txt">
                    <span class="uw-list__txt--laboratorium"><?php echo $nazwa_laboratorium; ?></span>
                    <br> 
                    <?php echo $nazwa_konsorcjanta; ?>                              
                    </p>
                </div>
                <div class="uw-list__content-wrap">
                    <a class="action-btn2" href="<?php echo $link; ?>">więcej</a>
                </div>
            </div>
        </li>      
                
        <?php endwhile;  wp_reset_postdata();?>      
        <?php } else { ?>
                
            <p class="uw-paragraph" style="text-align:center;font-weight:900;padding: 50px 0;">Nie znaleziono wyników pasujących do Twojego zapytania</p>
                
        <?php } ?>
    </ul>
</section>`;

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
