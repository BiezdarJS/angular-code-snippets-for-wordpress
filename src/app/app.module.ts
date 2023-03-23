import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  HighlightModule,
  HIGHLIGHT_OPTIONS,
  HighlightOptions
} from "ngx-highlightjs";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HandleLinkClickDirective } from './directives/handle-link-click.directive';
import { KodComponent } from './kod/kod.component';
import { HighlightService } from './services/highlight.service';


import 'highlightjs-line-numbers.js';
import { ReactiveFormsModule } from '@angular/forms';
import { OptionsPageComponent } from './components/options-page/options-page.component';
import { AdminRegisterStyleComponent } from './components/admin-register-style/admin-register-style.component';

import { GetTheDateComponent } from './components/blog/get-the-date/get-the-date.component';
import { CategoryFilterAjaxComponent } from './components/blog/category-filter-ajax/category-filter-ajax.component';
import { MorePostsAjaxComponent } from './components/blog/more-posts-ajax/more-posts-ajax.component';
import { TheExcerptComponent } from './components/blog/the-excerpt/the-excerpt.component';
import { ZmianaNazwyWpisyOrazIkonyComponent } from './components/blog/zmiana-nazwy-wpisy-oraz-ikony/zmiana-nazwy-wpisy-oraz-ikony.component';
import { CustomSubmitButtonComponent } from './components/cf7/custom-submit-button/custom-submit-button.component';
import { WyslanieTresciZPolaHiddenComponent } from './components/cf7/wyslanie-tresci-z-pola-hidden/wyslanie-tresci-z-pola-hidden.component';
import { SelectZmianaTresciWybierzOpcjeComponent } from './components/cf7/select-zmiana-tresci-wybierz-opcje/select-zmiana-tresci-wybierz-opcje.component';
import { GetCategoryByPostIdComponent } from './components/custom-post-type/get-category-by-post-id/get-category-by-post-id.component';
import { CustomTaxonomyJakStworzycComponent } from './components/custom-post-type/custom-taxonomy-jak-stworzyc/custom-taxonomy-jak-stworzyc.component';
import { CustomTaxonomyQueryComponent } from './components/custom-post-type/custom-taxonomy-query/custom-taxonomy-query.component';
import { CustomTaxonomyJakPobracKategorieComponent } from './components/custom-post-type/custom-taxonomy-jak-pobrac-kategorie/custom-taxonomy-jak-pobrac-kategorie.component';
import { CustomTaxonomyZmianaPermalinkowComponent } from './components/custom-post-type/custom-taxonomy-zmiana-permalinkow/custom-taxonomy-zmiana-permalinkow.component';
import { NewLogoComponent } from './components/customizer/new-logo/new-logo.component';
import { MenuRegisterComponent } from './components/menu/menu-register/menu-register.component';
import { WyszukiwarkaPrzykladComponent } from './components/wyszukiwarka/wyszukiwarka-przyklad/wyszukiwarka-przyklad.component';
import { WyszukiwarkaPostsLikeComponent } from './components/wyszukiwarka/wyszukiwarka-posts-like/wyszukiwarka-posts-like.component';
import { BreadcrumbsComponent } from './components/inne/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HandleLinkClickDirective,
    KodComponent,
    OptionsPageComponent,
    AdminRegisterStyleComponent,
    CategoryFilterAjaxComponent,
    GetTheDateComponent,
    MorePostsAjaxComponent,
    TheExcerptComponent,
    ZmianaNazwyWpisyOrazIkonyComponent,
    CustomSubmitButtonComponent,
    WyslanieTresciZPolaHiddenComponent,
    SelectZmianaTresciWybierzOpcjeComponent,
    GetCategoryByPostIdComponent,
    CustomTaxonomyJakStworzycComponent,
    CustomTaxonomyQueryComponent,
    CustomTaxonomyJakPobracKategorieComponent,
    CustomTaxonomyZmianaPermalinkowComponent,
    NewLogoComponent,
    MenuRegisterComponent,
    WyszukiwarkaPrzykladComponent,
    WyszukiwarkaPostsLikeComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HighlightModule
  ],
  providers: [
    HighlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
