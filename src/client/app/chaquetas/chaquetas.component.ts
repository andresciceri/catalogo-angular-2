import {Component, OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
  moduleId: __moduleName,
  selector: 'chaquetas',
  templateUrl: 'chaquetas.component.html',
  styleUrls: ['chaquetas.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class ChaquetasComponent implements OnInit {

  constructor(private _router: Router) {}
  
  ngOnInit() {
  }

}
