import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavListService {
  constructor() {}

  navList = [
    {
      name: '_INNE',
      subItems: [{ name: 'Breadcrumbs', link: '/breadcrumbs' }],
    },
    {
      name: 'ACF',
      subItems: [{ name: 'Dodaj zakładkę OPCJI', link: '/acf-options-page' }],
    },
    {
      name: 'ADMIN',
      subItems: [
        { name: 'Register Stylesheet', link: '/admin-register-style' },
      ],
    },
    {
      name: 'BLOG',
      subItems: [
        { name: 'Category FILTER AJAX', link: '/blog-category-filter-AJAX' },
        { name: 'Get The Date', link: '/blog-get-the-date' },
        { name: 'More Posts AJAX', link: '/blog-more-posts-AJAX' },
        { name: 'The Excerpt', link: '/blog-the-excerpt' },
        {
          name: 'ZMIANA NAZWY WPISY ORAZ IKONY',
          link: '/blog-zmiana-nazwy-wpisy-oraz-ikony',
        },
      ],
    },
    {
      name: 'CF7',
      subItems: [
        { name: 'Custom Submit Button', link: '/cf7-custom-submit-button' },
        {
          name: 'Wysłanie treści z pola hidden',
          link: '/cf7-wyslanie-tresci-z-pola-hidden',
        },
        {
          name: 'Select - zmiana treści "Wybierz opcję..."',
          link: '/cf7-select-zmiana-tresci-wybierz-opcje',
        },
      ],
    },
    {
      name: 'CUSTOM POST TYPE',
      subItems: [
        {
          name: 'GET CATEGORY by POST ID',
          link: '/cpt-get-category-by-post-id',
        },
        {
          name: 'CUSTOM TAXONOMY - JAK STWORZYĆ?',
          link: '/cpt-custom-taxonomy-jak-stworzyc',
        },
        { name: 'CUSTOM TAXONOMY QUERY', link: '/cpt-custom-taxonomy-query' },
        {
          name: 'CUSTOM TAXONOMY - JAK POBRAĆ KATEGORIE ?',
          link: '/cpt-get-categories',
        },
        {
          name: 'CUSTOM TAXONOMY - ZMIANA PERMALINKÓW',
          link: '/cpt-custom-taxonomy-change-permalinks',
        },
      ],
    },
    {
      name: 'CUSTOMIZER',
      subItems: [
        {
          name: 'Dodatkowe LOGO',
          link: '/customizer-new-logo',
        },
      ],
    },
    {
      name: 'MENU',
      subItems: [
        {
          name: 'MENU register',
          link: '/menu-register',
        },
      ],
    },
    {
      name: 'WYSZUKIWARKA',
      subItems: [
        {
          name: 'PRZYKŁAD WYSZUKIWARKI',
          link: '/wyszukiwarka-przyklad',
        },
        {
          name: 'POSTS LIKE',
          link: '/wyszukiwarka-posts-like',
        },
      ],
    },
  ];
}
