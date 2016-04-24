export class CatalogoProductosPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('catalogo-productos-app p')).getText();
  }
}
