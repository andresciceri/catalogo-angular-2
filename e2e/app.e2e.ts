import { CatalogoProductosPage } from './app.po';

describe('catalogo-productos App', function() {
  let page: CatalogoProductosPage;

  beforeEach(() => {
    page = new CatalogoProductosPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('catalogo-productos Works!');
  });
});
