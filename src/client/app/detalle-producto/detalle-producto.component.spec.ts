import {
  beforeEachProviders,
  describe,
  ddescribe,
  expect,
  iit,
  it,
  inject,
  injectAsync,
  ComponentFixture,
  TestComponentBuilder
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {DetalleProductoComponent} from './detalle-producto.component';

describe('DetalleProducto Component', () => {

  beforeEachProviders((): any[] => []);


  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(DetalleProductoComponent).then((fixture: ComponentFixture) => {
      fixture.detectChanges();
    });
  }));

});
