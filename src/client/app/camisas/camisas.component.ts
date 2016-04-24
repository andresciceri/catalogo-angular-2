import {Component, OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
  moduleId: __moduleName,
  selector: 'camisas',
  templateUrl: 'camisas.component.html',
  styleUrls: ['camisas.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class CamisasComponent implements OnInit {

  constructor(private _router: Router) {}
  
  ngOnInit() {
  }

}
