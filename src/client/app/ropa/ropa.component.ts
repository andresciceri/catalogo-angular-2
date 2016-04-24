import {Component, OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CamisasComponent} from '../camisas';
import {ChaquetasComponent} from '../chaquetas';
import {DetalleProductoComponent} from '../detalle-producto';

@Component({
  moduleId: __moduleName,
  selector: 'ropa',
  templateUrl: 'ropa.component.html',
  styleUrls: ['ropa.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/camisas', name: 'Camisas', component: CamisasComponent,useAsDefault: true},
  { path: '/chaquetas', name: 'Chaquetas', component: ChaquetasComponent},
  { path: '/detalle/:id', name: 'DetalleProducto', component: DetalleProductoComponent}
])
export class RopaComponent implements OnInit {

  constructor(private _router: Router) {}
  
  ngOnInit() {
  }

}
