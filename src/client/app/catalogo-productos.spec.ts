import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {CatalogoProductosApp} from '../app/catalogo-productos';

beforeEachProviders(() => [CatalogoProductosApp]);

describe('App: CatalogoProductos', () => {
  it('should have the `defaultMeaning` as 42', inject([CatalogoProductosApp], (app: CatalogoProductosApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([CatalogoProductosApp], (app: CatalogoProductosApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

