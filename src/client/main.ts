import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {environment} from './app/environment';
import {CatalogoProductosApp} from './app/catalogo-productos';

if (environment.production) {
  enableProdMode();
}

bootstrap(CatalogoProductosApp);
