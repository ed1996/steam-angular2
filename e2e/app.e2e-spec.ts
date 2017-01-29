import { RenduPage } from './app.po';

describe('rendu App', function() {
  let page: RenduPage;

  beforeEach(() => {
    page = new RenduPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
