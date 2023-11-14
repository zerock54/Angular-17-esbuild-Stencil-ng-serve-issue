import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { applyPolyfills, defineCustomElements } from 'test-compo/loader';

applyPolyfills().then(() => {
  defineCustomElements();

  bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err)
  );
});
