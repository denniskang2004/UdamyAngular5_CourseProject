import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//dknote: lecture 13: main.ts --> bootstrap app.Module--> find appComponent
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
