import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminRegisterStyleComponent } from './components/admin-register-style/admin-register-style.component';
import { CategoryFilterAjaxComponent } from './components/blog/category-filter-ajax/category-filter-ajax.component';
import { GetTheDateComponent } from './components/blog/get-the-date/get-the-date.component';
import { MorePostsAjaxComponent } from './components/blog/more-posts-ajax/more-posts-ajax.component';
import { TheExcerptComponent } from './components/blog/the-excerpt/the-excerpt.component';
import { ZmianaNazwyWpisyOrazIkonyComponent } from './components/blog/zmiana-nazwy-wpisy-oraz-ikony/zmiana-nazwy-wpisy-oraz-ikony.component';
import { CustomSubmitButtonComponent } from './components/cf7/custom-submit-button/custom-submit-button.component';
import { SelectZmianaTresciWybierzOpcjeComponent } from './components/cf7/select-zmiana-tresci-wybierz-opcje/select-zmiana-tresci-wybierz-opcje.component';
import { WyslanieTresciZPolaHiddenComponent } from './components/cf7/wyslanie-tresci-z-pola-hidden/wyslanie-tresci-z-pola-hidden.component';
import { CustomTaxonomyJakPobracKategorieComponent } from './components/custom-post-type/custom-taxonomy-jak-pobrac-kategorie/custom-taxonomy-jak-pobrac-kategorie.component';
import { CustomTaxonomyJakStworzycComponent } from './components/custom-post-type/custom-taxonomy-jak-stworzyc/custom-taxonomy-jak-stworzyc.component';
import { CustomTaxonomyQueryComponent } from './components/custom-post-type/custom-taxonomy-query/custom-taxonomy-query.component';
import { CustomTaxonomyZmianaPermalinkowComponent } from './components/custom-post-type/custom-taxonomy-zmiana-permalinkow/custom-taxonomy-zmiana-permalinkow.component';
import { GetCategoryByPostIdComponent } from './components/custom-post-type/get-category-by-post-id/get-category-by-post-id.component';
import { NewLogoComponent } from './components/customizer/new-logo/new-logo.component';
import { BreadcrumbsComponent } from './components/inne/breadcrumbs/breadcrumbs.component';
import { MenuRegisterComponent } from './components/menu/menu-register/menu-register.component';
import { OptionsPageComponent } from './components/options-page/options-page.component';
import { WyszukiwarkaPostsLikeComponent } from './components/wyszukiwarka/wyszukiwarka-posts-like/wyszukiwarka-posts-like.component';
import { WyszukiwarkaPrzykladComponent } from './components/wyszukiwarka/wyszukiwarka-przyklad/wyszukiwarka-przyklad.component';

const routes: Routes = [
  {
    path: 'breadcrumbs',
    component: BreadcrumbsComponent,
  },
  {
    path: 'acf-options-page',
    component: OptionsPageComponent,
  },
  {
    path: 'admin-register-style',
    component: AdminRegisterStyleComponent,
  },
  {
    path: 'blog-category-filter-AJAX',
    component: CategoryFilterAjaxComponent,
  },
  {
    path: 'blog-get-the-date',
    component: GetTheDateComponent,
  },
  {
    path: 'blog-more-posts-AJAX',
    component: MorePostsAjaxComponent,
  },
  {
    path: 'blog-the-excerpt',
    component: TheExcerptComponent,
  },
  {
    path: 'blog-zmiana-nazwy-wpisy-oraz-ikony',
    component: ZmianaNazwyWpisyOrazIkonyComponent,
  },
  {
    path: 'cf7-custom-submit-button',
    component: CustomSubmitButtonComponent,
  },
  {
    path: 'cf7-wyslanie-tresci-z-pola-hidden',
    component: WyslanieTresciZPolaHiddenComponent,
  },
  {
    path: 'cf7-select-zmiana-tresci-wybierz-opcje',
    component: SelectZmianaTresciWybierzOpcjeComponent,
  },
  {
    path: 'cpt-get-category-by-post-id',
    component: GetCategoryByPostIdComponent,
  },
  {
    path: 'cpt-custom-taxonomy-jak-stworzyc',
    component: CustomTaxonomyJakStworzycComponent,
  },
  {
    path: 'cpt-custom-taxonomy-query',
    component: CustomTaxonomyQueryComponent,
  },
  {
    path: 'cpt-get-categories',
    component: CustomTaxonomyJakPobracKategorieComponent,
  },
  {
    path: 'cpt-custom-taxonomy-change-permalinks',
    component: CustomTaxonomyZmianaPermalinkowComponent,
  },
  {
    path: 'customizer-new-logo',
    component: NewLogoComponent,
  },
  {
    path: 'menu-register',
    component: MenuRegisterComponent,
  },
  {
    path: 'wyszukiwarka-przyklad',
    component: WyszukiwarkaPrzykladComponent,
  },
  {
    path: 'wyszukiwarka-posts-like',
    component: WyszukiwarkaPostsLikeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
