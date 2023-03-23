import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { fromEvent, Subscription } from 'rxjs';
import { PrismService } from '../services/prism.service';


@Component({
  selector: 'app-kod',
  templateUrl: './kod.component.html',
  styleUrls: ['./kod.component.scss']
})
export class KodComponent implements OnInit, AfterViewChecked, AfterViewInit, OnDestroy {


  @ViewChild('textArea', { static: true })
  textArea!: ElementRef;
  @ViewChild('codeContent', { static: true })
  codeContent!: ElementRef;
  @ViewChild('pre', { static: true })
  pre!: ElementRef;


  highlighted = false;
  codeType = 'php';

text =`/* =============================================================================
// ACF - generate options page
// =============================================================================*/

if (function_exists('acf_add_options_page')) {
  acf_add_options_page(array(
      'page_title' => 'Usługi',
      'menu_title' => 'Usługi',
      'menu_slug' => 'uslugi-acf',
      'parent_slug' => ''
  ));`;

html = `//to jest komentarz\n<div class="contact-form contact-form--contact flex">
<div class="contact-form__center">
[text* your-name class:form-control placeholder "Imię i nazwisko" ]
[email* your-email class:form-control placeholder "Adres e-mail" ]
[text* your-phone class:form-control placeholder "Numer Telefonu" ]
[textarea your-message class:form-control placeholder "Dzień dobry, potrzebuję pomocy przy..." ]
</div>
</div>
<div class="contact-rodo contact-rodo__contact">
<p style="float:left;margin-right:10px;margin-top:-1px;">[acceptance acceptance-852]</p><p class="contact-rodo__txt" >Administratorem udostępnianych przez Państwa danych osobowych jest DOEKO GROUP spółka z ograniczoną odpowiedzialnością z siedzibą w Węgrzcach przy ul. Warszawska 126A, 32-086 Węgrzce. Dane przetwarzane są w celu umożliwienia przedstawienia oferty handlowej. Dane będą przetwarzane do czasu wygaśnięcia wszelkich roszczeń związanych z przedstawieniem oferty bądź wykonaniem zawartej umowy. Osoba, której dotyczą dane osobowe, ma prawo dostępu do tych danych, ograniczenia ich przetwarzania, usunięcia, przenoszenia lub sprostowania, jak również może wnieść sprzeciw wobec ich przetwarzania. Szczegółowe informacje tutaj: Polityka RODO.</p> [/acceptance]  
</div>`;




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

  }




}
