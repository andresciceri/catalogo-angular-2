import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {RopaComponent} from './ropa';
import {ZapatosComponent} from './zapatos';
import {AccesoriosComponent} from './accesorios';


@Component({
  moduleId: __moduleName,
  selector: 'catalogo-productos-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'catalogo-productos.html',
  styleUrls: ['catalogo-productos.css'],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  {path: '/...', name: 'Ropa', component: RopaComponent},
  {path: '/zapatos', name: 'Zapatos', component: ZapatosComponent},
  {path: '/accesorios', name: 'Accesorios', component: AccesoriosComponent},
])
export class CatalogoProductosApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
