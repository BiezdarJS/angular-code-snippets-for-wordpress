import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HighlightJsConfig, HIGHLIGHTJS_CONFIG } from 'ngx-highlight-js';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    {
      provide: HIGHLIGHTJS_CONFIG,
      useValue: { lang: 'html' } as HighlightJsConfig,
    },
  ],
})
  .catch(err => console.error(err));
